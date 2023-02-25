import { Outlet } from "solid-start";

export default function BlogPost() {
    return (
        <div>
            <h1>Hey I'm the layout guy/gal</h1>
            <Outlet />
        </div>
    )
}
