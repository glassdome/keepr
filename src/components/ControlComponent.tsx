
import { Nav, Header } from "./layout";



const ControlWorkspace = (props: {icon: string }) => {
   return (
    <div className="workspace">
      <div className="workspace__controls">
        <h3> {`${props.icon.toUpperCase()} Workspace`}</h3>
      </div>
    </div>
  );
}


const ControlComponent = (props: { icon: string }) => {
  return (
    <div className="App">
        <Header />
        <Nav />
        <ControlWorkspace icon={props.icon}/>
     </div>
  )
}



export default ControlComponent;