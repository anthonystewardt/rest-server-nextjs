
import React from 'react';
import { usePathname } from 'next/navigation';
import { IconType } from 'react-icons';
import { CiBookmarkCheck } from 'react-icons/ci';
import LinkItem from './LinkItem';

interface Props {
  name: string;
  icon: JSX.Element;
  path: string;
}


export const SideItem = ({ icon, name, path }: Props) => {
  // const pathName = usePathname();

  // console.log(pathName)

  return (
    <>
      <LinkItem name={name} icon={icon} path={path} />
    </>
  );
}

