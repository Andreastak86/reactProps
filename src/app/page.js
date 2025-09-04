import UserCards from "@/components/UserCards";

export default function Home() {
    return (
        <>
            <h1 className='mb-2 underline'>Propping i react</h1>
            <UserCards
                name='Andreas'
                age='38'
                location='Bergen'
                email='andreas.takvam@gmail.com'
                phone='41627916'
                role='Potet'
            />
        </>
    );
}
