const Hello = (props) => {
  console.log(props)

  return(

    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}


const Friends = [
  { name: 'Leevi', age: 4 },
  { name: 'Venla', age: 10 },
]
const App = () => {

  const nimi= "Kurre"
  const ika = 22
 return(
  <>

    <h1>Greetings</h1>
    <Hello name="Maya" age={26+10} />
    <Hello name={nimi} age={ika}/>
    </>
 )
}
export default App