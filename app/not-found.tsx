import Link from 'next/link'
import {Button} from "@/components/components/override/material";

export default function FourOhFour() {
    return <div className="container text-center mx-auto">
        <h1>404 - Page Not Found</h1>
        <div>¯\_(ツ)_/¯</div>
        <Link href="/">
            <Button className="mt-4">
                Go back home
            </Button>
        </Link>
    </div>
}