const url = import.meta.env.VITE_API_URL
const registerUrl = new URL(url + "/auth/register")
const loginUrl = new URL(url + "/auth/login")
export async function postData<IUser>(data: IUser): Promise<{ status: number; }> {
    const res = await fetch(registerUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return {
        status: res.status,
    }
}
export async function logUser<IUser>(data: IUser): Promise<{ status: number; }> {
    const res = await fetch(loginUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return {
        status: res.status,
    }
}
