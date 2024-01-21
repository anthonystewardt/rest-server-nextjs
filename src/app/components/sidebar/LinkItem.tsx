"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { IconType } from 'react-icons';

interface Props {
  name: string;
  icon: JSX.Element;
  path: string;
}

const LinkItem = ({name, icon, path}: Props) => {
  const pathName = usePathname();

  console.log(pathName)
  return (
    <Link href={path} className={`flex items-center px-4 py-2 mb-5 rounded-lg ${ pathName === path ? "bg-blue-100 font-semibold "  : ""}` }>
      {icon}
      <span>{name}</span>
    </Link>
  );
}

export default LinkItem;
