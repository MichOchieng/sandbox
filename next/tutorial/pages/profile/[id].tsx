import { NextPage } from "next";
import { useRouter } from "next/router";

const Profile: NextPage = () => {
    const router =  useRouter()
    const { id } = router.query

    return(
        <div>
            <h1>Hello { id } </h1>
        </div>
    )
}