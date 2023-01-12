import getEmailRepository from '../../../data/email';
import EmailVerifyUseCase from './EmailVerifyUseCase';

const repository = getEmailRepository();

export function emailVerifyUseCase() {
    return new EmailVerifyUseCase(repository);
}
