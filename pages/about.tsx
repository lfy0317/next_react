function About({id}: {id: number}) {
    return <div>{id}</div>;
}

export async function getStaticProps(context: any) {
    console.log(222);
    return {
        props: {
            id: 111
        }
    };
}

export default About;
