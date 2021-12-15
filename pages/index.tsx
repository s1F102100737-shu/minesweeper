import type { NextPage } from 'next'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  background-color: #c0c0c0;
`
const Board = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 350px;
  height: 400px;
  margin: auto;
  background: #fff;
  transform: translate(-50%, -50%);
`
const Face = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  left: 0;
  width: 30px;
  height: 30px;
  margin: auto;
  background-color: #ff0;
  border-radius: 50%;
`
const Filde = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;
  width: 270px;
  height: 270px;
  margin: auto;
  background: #c0c0c0;
  transform: translate(-50%, -50%);
`
const Block = styled.div`
  width: 30px;
  height: 30px;
  background-color: #fff;
  border: solid 5px #808080;
`

const Home: NextPage = () => {
  return (
    <Container>
      <Board>
        <Face></Face>
        <Filde>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
        </Filde>
      </Board>
    </Container>
  )
}

export default Home
