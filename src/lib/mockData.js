export const people = [
  { id: 1, name: 'Kavi Ravi', score: 92, category: 'Close Friends' },
  { id: 2, name: 'Meera S', score: 78, category: 'Close Friends' },
  { id: 3, name: 'Arjun P', score: 65, category: 'Growth Circle' },
  { id: 4, name: 'Divya N', score: 88, category: 'Family' },
  { id: 5, name: 'Rahul K', score: 54, category: 'Growth Circle' },
  { id: 6, name: 'Sana T', score: 71, category: 'Close Friends' },
]

export const circles = [
  { id: 'c1', name: 'Close Friends', color: 'from-sky to-violet', members: 6, description: 'Your inner circle — real talk only.' },
  { id: 'c2', name: 'Family', color: 'from-bloom to-violet', members: 4, description: 'Warm updates for the people who raised you.' },
  { id: 'c3', name: 'Growth Circle', color: 'from-leaf to-sky', members: 9, description: 'Accountability partners for goals & habits.' },
  { id: 'c4', name: 'Old Friends', color: 'from-violet to-bloom', members: 12, description: 'Keep the thread alive, even from a distance.' },
]

export const posts = [
  {
    id: 'p1',
    author: 'Kavi Ravi',
    authorId: 1,
    circle: 'Close Friends',
    time: '2h',
    text: 'Finally finished the 5K I\'ve been training for since March. Slow, but I finished it.',
    reactions: 14,
    comments: 4,
  },
  {
    id: 'p2',
    author: 'Divya N',
    authorId: 4,
    circle: 'Family',
    time: '5h',
    text: 'Amma\'s birthday dinner tonight. Grateful for small, ordinary evenings like this.',
    reactions: 22,
    comments: 7,
  },
  {
    id: 'p3',
    author: 'Rahul K',
    authorId: 5,
    circle: 'Growth Circle',
    time: '1d',
    text: 'Day 30 of no social media doom-scrolling before bed. Sleep is actually better.',
    reactions: 9,
    comments: 2,
  },
]

export const impactStats = {
  streak: 12,
  circlesActive: 4,
  trustAvg: 74,
  supportGiven: 38,
}
