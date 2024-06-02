import ReactDOM from "react-dom";
import Card from "../../modelos/card/card";
import App from "../../modelos/card/app";

ReactDOM.render(<App />, document.getElementById("root"));

export default function menuExamenes(){
    return(
        <>
        <Card direction={"vertical"} width={"304px"} header={"Holaa"} link={true} actions={true}
                      adicional={true}
                      bt1={"Hola"} bt2={"Hola"} score={"10.0"} date={"10/10/2021"} img={"si"}
                      text={"Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad"}/>
        </>
    )

}