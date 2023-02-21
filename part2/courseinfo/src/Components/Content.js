import Part from "./Part.js"
const Content = (props) => {
    console.log("test")
    return (
        <>
        <Part chapter={props.course.parts[0]}/>
        <Part chapter={props.course.parts[1]}/>
        <Part chapter={props.course.parts[2]}/>
        </>
      )
  }
  export default Content