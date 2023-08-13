import './App.css';
import Values from 'values.js';
import Colors from './colors';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
const [color,setColor] = useState('')
//const [color1,setColor1] = useState('')
const [moreColor,setMoreColor] = useState(new Values('red').all(10))

const colorValue=(e)=>{
  let value=e.target.value
  setColor(value)
}
console.log(navigator.clipboard)

const submitVAlue =(e)=>{
  e.preventDefault()
  try{
    const colorList = new Values(color).all(10)
    setMoreColor(colorList)
  }catch(error){
    if(color.trim()==''){
      console.log('helo')
      toast('Type or select a color',{
        position:'top-center',
        type:'error',
        position:'top-center',
        theme:'light',
        }
      )
    }else{
      toast('Invalid Color',{
        position:'top-center',
        type:'error',
        position:'top-center',
        theme:'light',
      })
    }
  }
}
//const notify =()=>{toast('wow so easy')}
  return (
    <main className="h-screen">
      <section  className='w-full flex flex-col p-12 md:flex-row md:items-center'>
        <h1 className='text-3xl mb-5 mr-4'>Color Generator</h1>
        <form className='flex items-center h-12' onSubmit={submitVAlue}>
          <input type='color' className='h-10 border-[blue] bg-white' onChange={colorValue} value={color}/>
          <input type='text' placeholder='#f15025'  onChange={colorValue} className='border-2 h-full w-[250px] rounded-[5px]' value={color}/>
          <button className={`h-full w-28 rounded-md text-white`} style={{backgroundColor:`${color.trim()==''?'blue':color}`}} >Submit</button>
        </form>
      </section>
      <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {moreColor.map((items, index)=>{
          const {weight,hex}=items
          //console.log(hex)
          if(index<10){
            return <Colors weight={weight} hex={hex} textColor={'black'} key={hex}/>
          }else{
            return <Colors weight={weight} hex={hex} textColor={'white'} key={hex}/>
          }
        })}
      </section>
      <ToastContainer/>
    </main>
  );
}

export default App;
