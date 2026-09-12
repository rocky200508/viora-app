import { useState } from 'react';
import './theme.css';

const TABS = [
  { key: 'feed', label: 'Feed', icon: FeedIcon },
  { key: 'friends', label: 'Friends', icon: FriendsIcon },
  { key: 'chat', label: 'Chat', icon: ChatIcon },
  { key: 'profile', label: 'Profile', icon: ProfileIcon },
];

export default function BottomNav({ active, onChange }) {
  const [internalActive, setInternalActive] = useState('feed');
  const current = active ?? internalActive;

  const handleSelect = (key) => {
    if (onChange) onChange(key);
    else setInternalActive(key);
  };

  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left