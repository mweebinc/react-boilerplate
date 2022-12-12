import GetCurrentUserUseCase from './GetCurrentUserUseCase';
import SignUpUseCase from './SignUpUseCase';
import SignInUseCase from './SignInUseCase';
import SignOutUseCase from './SignOutUseCase';
import ResetPasswordUseCase from "./ResetPasswordUseCase";

export function getCurrentUserUseCase() {
    return new GetCurrentUserUseCase();
}

export function signUpUseCase() {
    return new SignUpUseCase();
}

export function signInUseCase() {
    return new SignInUseCase();
}

export function signOutUseCase() {
    return new SignOutUseCase();
}

export function resetPasswordUseCase() {
    return new ResetPasswordUseCase();
}

