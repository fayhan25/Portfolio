import Typewriter from "typewriter-effect";

const Type = () => {
    return(
        <Typewriter
            options={{
                strings: ['Full Stack Developer', '4th Year Computer Science Student'],
                autoStart: true,
                loop: true,
            }}
        />
    )
}

export default Type;