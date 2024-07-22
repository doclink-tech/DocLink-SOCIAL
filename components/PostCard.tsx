import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { BookmarkCheck, Ellipsis, SendHorizonal } from 'lucide-react'
import { RiMessage2Fill } from 'react-icons/ri'
import { BiCommentAdd, BiUpvote } from 'react-icons/bi'
import { MdShare } from 'react-icons/md'

const PostCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 ">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500 text-sm">15 hours ago</span>
            <div className="flex flex-row items-center gap-x-3">
              <Button
                className="text-white rounded-3xl font-semibold"
                size="sm"
              >
                <RiMessage2Fill className="mr-1" /> Message
              </Button>
              <Ellipsis />
            </div>
          </div>
          <p className="mb-2 font-semibold">
            Have a great day with my amazing client all the way from NewYork
          </p>
          <Button className="bg-orange-500 text-white rounded-3xl" size='sm'>
            Confession
          </Button>
          <div className="relative h-40 w-full my-4">
            <Image
              src="/next.svg"
              alt="Client meeting"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className='flex items-center flex-row justify-between'>
          <div className="flex items-center flex-row space-x-4">
            <div className="flex items-center flex-row gap-x-1">
              <BiUpvote className='w-5 h-5 text-gray-700' />
              <span className='text-sm text-muted-foreground'>56.9k</span>
            </div>
            <div className="flex flex-row gap-x-2 items-center">
              <BiCommentAdd className='w-5 text-gray-700 h-5' />
              <span className='text-sm text-muted-foreground'>56.9k</span>
            </div>
          </div>
          <div className='flex flex-row items-center gap-x-3'>
            <BookmarkCheck className='text-gray-700 w-5 h-5' />
            <MdShare className='text-gray-700 w-5 h-5' />
          </div>
          </div>
        </div>
  )
}

export default PostCard