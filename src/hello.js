import React from 'react'
import ReactDOM from 'react-dom'

const Header = () => (
     <div id="head">
             <img src="pic/logo.png" height="80%" width="17%" style={{position:"relative"}} />
     </div>  
)

const Content = (props) =>(
    <section>
        {
            props.items.pokemons.map(item => (
                    <section className='card' className="item">
                        <img src = {item.pic} height="100%" width="50%"/>
                        <ul >{item.name}</ul>
                        <li >Category {item.category}</li>
                        <li >Height {item.height}</li>
                        <li >Weight {item.weight}</li>
                    </section>
            ))
        }
    </section>
)

const Hello = () =>{
   
    const Item = {'pokemons':[{
            name  : 'Bulbasaur',
            pic  : 'pic/001.png',
            category    : 'Seed',
            height    : '2\' 04\"',
            weight: '15.2 lbs'
        },{
            name  : 'Chikorita',
            pic   : 'pic/152.png',
            category    : 'Leaf',
            Height    : '2\' 11\"',
            Weight: '14.1 lbs'
        },{
             name  : 'Bulbasaur',
            pic   : 'pic/251.png',
            category    : 'Time Travel',
            height    : '2\' 00\"',
            weight: '11.00 lbs'
        },{
             name  : 'Skiddo',
             pic    : 'pic/672.png',
            category   : 'Mount',
            height    : '2\' 11\"',
            weight: '68.3 lbs'
        }
    ]}
    
    return(
        <section>
            <Header/>
            <Content items = {Item}/>
        </section>
    )
}

const ELEMENT = document.getElementById('hello')
ReactDOM.render(<Hello/>,ELEMENT)