import {AppProvider} from '@toolpad/core/AppProvider';
import {
    AuthResponse,
    SignInPage,
    type AuthProvider,
} from '@toolpad/core/SignInPage';
import {useTheme} from '@mui/material/styles';
import "./SignIn.css"

// preview-start
const providers = [
    {id: 'google', name: 'Google'},
    {id: 'credentials', name: 'Email and password'},
];
// preview-end

const signIn: (provider: AuthProvider) => void | Promise<AuthResponse> = async (
    provider,
) => {
    // preview-start
    const promise = new Promise<AuthResponse>((resolve) => {
        setTimeout(() => {
            console.log(`Sign in with ${provider.id}`);
            resolve({error: 'This is a fake error'});
        }, 500);
    });
    // preview-end
    return promise;
};

export default function OAuthSignInPage() {
    const theme = useTheme();
    return (
        // preview-start
        <div className="signInContainer">
            <AppProvider theme={theme}>
                <SignInPage signIn={signIn} providers={providers}/>
            </AppProvider>
        </div>
        // preview-end
    );
}
