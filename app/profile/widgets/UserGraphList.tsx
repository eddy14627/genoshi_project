'use client';

import UserGraphListItem from './UserGraphListItem';
import { Button, buttonVariants } from './ui/button';
import { Input } from './ui/input';
import { USER_GRAPHS } from '@/lib/config';
import { UserGraph } from '@/lib/types';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

const UserGraphList = () => {
  const [search, setSearch] = useState<string>('');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="flex flex-col gap-3 lg:gap-5 text-black">
      <div className="flex flex-col-reverse lg:flex-row gap-5 justify-between">
        <Input
          placeholder="Search my graphs..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <Link
          href="/create-new-graph"
          className={buttonVariants({ variant: 'default' })}
        >
          New Graph
        </Link>
      </div>
      <Slider {...settings}>
        {(search === ''
          ? USER_GRAPHS
          : USER_GRAPHS.filter((graph) =>
              graph.title.toLowerCase().includes(search)
            )
        ).map((graph) => {
          return <UserGraphListItem key={graph.id} data={graph} />;
        })}
      </Slider>
    </div>
  );
};

export default UserGraphList;
