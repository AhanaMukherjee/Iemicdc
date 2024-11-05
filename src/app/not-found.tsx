import TypingText from '@/components/animata/text/typing-text'
import { Container } from '@/components/Container'
import Link from 'next/link'
 
export default function NotFound() {
  return (
        <Container className='flex items-center justify-center'>
            <div className='w-[40%] flex flex-col gap-8 items-center justify-center'>
            {/* <h1 className='text-6xl w-full text-center text-primary font-bold'>Coming Soon...</h1> */}
            <TypingText
                text='Coming Soon...'
                className='text-6xl w-full text-center text-primary font-bold'
                repeat={false}
            />
            <Link href={"/"} className='text-blue-500 underline'>Return To Homepage</Link>
            </div>
        </Container>
  )
}