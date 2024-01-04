import { useRef } from 'react';
import Card from "./Card"
const foreground = () => {
    const ref = useRef(null);
    const data=[
        {
            desc:"hiii this will be displayed wow its working",
            filesize:"9mb",
            close:true,
            tag:{isopen:false, tagtitle:"Download Now", tagcolor:"green",}
        },
        {
            desc:"hiii this will be displayed wow its working",
            filesize:"5mb",
            close:false,
            tag:{isopen:true, tagtitle:"Get Now", tagcolor:"blue",}
        },
        {
            desc:"hiii this will be displayed wow its working",
            filesize:"3mb",
            close:true,
            tag:{isopen:true, tagtitle:"Click Me", tagcolor:"green",}
        },
    ];


    return (
        <>
            <div ref={ref} className='fixed top-0 p-5 left-0 z-[3] w-full h-full flex gap-10 flex-wrap'>
            {data.map((items,index)=>(
                <Card key={index} data={items} referance={ref}/>
            ))}
            </div>
        </>
    )
}
    
export default foreground
