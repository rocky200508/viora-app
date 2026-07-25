import React, { useEffect, useState } from 'react'
import TopBar from '../components/TopBar.jsx'
import TrustRing from '../components/TrustRing.jsx'
import { Heart, MessageCircle, Sparkles } from 'lucide-react'
import { supabase } from '../lib/supabaseClient.js'

export default function Feed() {
  const [posts, setPosts] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data: profilesData, error: profilesError } = await supabase
        .from('profiles')
        .select('*')

      const { data: postsData, error: postsError } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })

      if (profilesError) console.error('Profiles error:', profilesError)
      if (postsError) console.error('Posts error:', postsError)

      if (profilesData) setPeople(profilesData)
      if (postsData) setPosts(postsData)
    }
    fetchData()
  }, [])

  return (
    <div>
      <TopBar title="Viora" />
      <div className="px-5 pb-3">
        <p className="text-sm text-indigo-ink/50">Connect. Trust. Grow Together.</p>
      </div>

      <div className="px-5 pb-4 flex gap-4 overflow-x-auto no-scrollbar">
        {people.map((p) => (
          <div key={p.id} className="flex flex-col items-center gap-1 shrink-0">
            <TrustRing name={p.full_name || p.username} score={60} size={58} />
            <span className="text-[11px] text-indigo-ink/60 max-w-[58px] truncate">
              {p.full_name || p.username}
            </span>
          </div>
        ))}
      </div>

      <div className="px-5 space-y-4 pb-28">
        {posts.map((post) => {
          const author = people.find((p) => p.id === post.user_id)
          return (
            <article key={post.id} className="bg-white rounded-2xl p-4 shadow">
              <div className="flex items-center gap-3 mb-3">
                <TrustRing name={author?.full_name || 'User'} score={60} />
                <div className="flex-1">
                  <p className="font-display font-semibold text-indigo-ink">
                    {author?.full_name || author?.username || 'Unknown'}
                  </p>
                  <p className="text-[11px] text-indigo-ink/40">{post.category}</p>
                </div>
              </div>
              <p className="text-[14px] text-indigo-ink/80 leading-relaxed">{post.content}</p>
              <div className="flex items-center gap-5 text-indigo-ink/50 mt-3">
                <button className="flex items-center gap-1.5 text-[13px]">
                  <Heart size={16} /> {post.likes_count || 0}
                </button>
                <button className="flex items-center gap-1.5 text-[13px]">
                  <MessageCircle size={16} /> 0
                </button>
                <button className="flex items-center gap-1.5 text-[13px]">
                  <Sparkles size={14} /> Encourage
                </button>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}