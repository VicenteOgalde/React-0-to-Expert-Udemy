const newMessage = {m1:"hello",m2:"hello2"};

const getFirstMessage=(message)=>message.m2;

export function FirstApp(){


    return <>
    <h2>First App {getFirstMessage(newMessage)}</h2>
    <h3>---------</h3>
    </>
}
