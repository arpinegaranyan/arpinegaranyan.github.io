
import React, { useState, useRef } from 'react';
import { render } from 'react-dom';
import { useTransition, useSpring, useChain, config } from 'react-spring';
import { animated } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'

// const Global = createGlobalStyle`
//   * {
//     box-sizing: border-box;
//   }

// //    html,
// //   body,
// //   #root {
// //    margin: 0;
// //     padding: 0;
// //    height: 100%;
// //    width: 100%;
// //    overflow: hidden;
// //    user-select: none;
// //    background: black;
// //    padding: 20px;
// //    display: flex;
// //    align-items: center;
// //    justify-content: center;
    
// // }
// `

// const Container = styled(animated.div)`
//   position: relative;
//   display: grid;
//   grid-template-columns: repeat(3, minmax(50px, 1fr));
//   grid-gap: 80px;
//   padding: 50px;
//   background: black;
//   border-radius: 5px;
//   cursor: pointer;
//   box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
//   will-change: width, height;
// `

// const Item = styled(animated.div)`
//   width: 300px;
//   height: 100px;
//   background: black;
//   border-radius: 5px;
//   will-change: transform, opacity;
// `

// export { Global, Container, Item }

// const data = [
//     {
//       name: 'Rare Wind',
//       description: '#a8edea → #fed6e3',
//       css: 'linear-gradient(to top, #ff0844 0%, #ffb199 100%)',
//       height: 200
//     },
//     {
//       name: 'Saint Petersburg',
//       description: '#f5f7fa → #c3cfe2',
//       css: 'linear-gradient(to top, #ff0844 0%, #ffb199 100%)',
//       height: 400
//     },
//     {
//       name: 'Deep Blue',
//       description: '#e0c3fc → #8ec5fc',
//       css: 'linear-gradient(to top, #ff0844 0%, #ffb199 100%)',
//       height: 400
//     },
//     {
//       name: 'Ripe Malinka',
//       description: '#f093fb → #f5576c',
//       css: 'linear-gradient(to top, #ff0844 0%, #ffb199 100%)',
//       height: 400
//     },
//     {
//         name: 'Wild Apple',
//         description: '#d299c2 → #fef9d7',
//         css: 'linear-gradient(to top, #ff0844 0%, #ffb199 100%)',
//         height: 200
//       },
     
//     {
//         name: 'Ripe Malinka',
//         description: '#f093fb → #f5576c',
//         css: 'linear-gradient(to top, #ff0844 0%, #ffb199 100%)',
//         height: 400
//       },
//   ]
// function Skills(){
//         const [open, set] = useState(false)
      
//         const springRef = useRef()
//         const { size, opacity, ...rest } = useSpring({
//           ref: springRef,
//           config: config.stiff,
//           from: { size: '20%', background: '#f7455b' },
//           to: { size: open ? '100%' : '20%', background: open ? 'black' : '#f7455b' }
//         })
      
//         const transRef = useRef()
//         const transitions = useTransition(open ? data : [], item => item.name, {
//           ref: transRef,
//           unique: true,
//           trail: 200 / data.length,
//           from: { opacity: 0, transform: 'scale(0)' },
//           enter: { opacity: 1, transform: 'scale(1)' },
//           leave: { opacity: 0, transform: 'scale(0)' }
//         })
      
//         // This will orchestrate the two animations above, comment the last arg and it creates a sequence
//         useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6])
      
//         return (
//           <>
//             <Global />
//             <Container style={{ ...rest, width: size, height: size }} onClick={() => set(open => !open)}>
//               {transitions.map(({ item, key, props }) => (
//                 <Item key={key} style={{ ...props, background: item.css }} />
//               ))}
//             </Container>
//           </>
//         )
//       }

// export  {Skills};


function Skills(){
    return (
        <div className="skills">
           <p className="_text">
              <div className="skillsContainer">
                  <div className="gradient">HTML</div>
                  <div className="gradient">CSS</div>
                  <div className="gradient">JavaScript</div>
                  <div className="gradient">React</div>
                  <div className="gradient">Redux</div>
                  <div className="gradient">Firebase</div>
              </div>     
            </p>
           
        </div>
    )
}
export  {Skills};