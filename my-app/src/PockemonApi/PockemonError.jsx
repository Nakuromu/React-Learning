import ErrorImg from '../ErrorImg.jpg'

export default function PockemonError ({message}) {
    return(
    <div role='alert'>
        <img src={ErrorImg} alt="sadcat" width='240'/>
        <p>{message}</p>
    </div>
    )
}