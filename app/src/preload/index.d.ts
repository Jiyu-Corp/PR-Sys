declare global {
    interface Window {
        electron: {
            access: {
                getDefault: () => Promise<string>,
                forgotPassword: () => Promise<boolean>
            }
        }
    }
}

export { }
