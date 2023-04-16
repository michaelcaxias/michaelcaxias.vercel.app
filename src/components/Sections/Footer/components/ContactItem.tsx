import React from 'react';

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
}

export default function ContactItem({ icon, text }: ContactItemProps) {
  return (
    <li>
      {icon}
      {text}
    </li>
  );
}
