import { useState } from 'react'
import Card from '../../components/Card'
import styled from 'styled-components'

const Container = styled.div`

  display: relative;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(5px);
	margin: 0rem auto;
	width: var(--std-width);
	min-width: 300px;
	max-width: 400px;
	/* padding-top: rem; */
	border: 1px solid rgba(255, 255, 255, 0.15);
	border-radius: 1em;
	overflow: hidden;
	z-index: 1;

`;

function App() {
  

  return (
    <Container>
      <Card />

    </Container>
  )
}

export default App
