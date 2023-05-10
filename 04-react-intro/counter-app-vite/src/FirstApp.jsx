import PropTypes from 'prop-types';


const newMessage = {m1:"hello",m2:"hello2"};

const getFirstMessage=(message)=>message.m2;

export function FirstApp({title,subTitle}){

    return <>
    <h2>First App {getFirstMessage(newMessage)}</h2>
    <h3>{title}</h3>
    <h3>{subTitle}</h3>
    </>
}

FirstApp.propTypes={
    title:PropTypes.string.isRequired,
    subTitle:PropTypes.string
}
FirstApp.defaultProps = {
    title:'title by default'
    ,subTitle:"subtitle"
}
