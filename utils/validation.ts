import { useForm } from 'react-hook-form';

function isEmailValid(email: string): boolean {
  // Implement a simple email validation logic here
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return email === '' || emailRegex.test(email);
}

function isLinkValid(link: string): boolean {
  try {
    // Implement your link validation logic here
    const url = new URL(link);
    const hostname = url.hostname;
    const pathname = url.pathname;

    switch (true) {
      case hostname.includes('linkedin.com') && pathname.startsWith('/in/'):
        return true;
      case hostname.includes('github.com') && pathname.split('/').length === 2:
        return true;
      case hostname.includes('youtube.com') && pathname.startsWith('/user/'):
        return true;
      case hostname.includes('twitter.com') && pathname.split('/').length === 2:
        return true;
      case hostname.includes('facebook.com') && pathname.startsWith('/'):
        return true;
      case hostname.includes('instagram.com') &&
        pathname.split('/').length === 2:
        return true;
      default:
        return false;
    }
  } catch (e) {
    return false;
  }
}

export function useValidation() {
  const { register, watch } = useForm({
    defaultValues: {
      email: '',
      link: '',
    },
  });

  const watchedEmail = watch('email', '');
  const watchedLink = watch('link', '');

  const isEmailValidResult = isEmailValid(watchedEmail);
  const isLinkValidResult = isLinkValid(watchedLink);

  return {
    register,
    isEmailValid: isEmailValidResult,
    isLinkValid: isLinkValidResult,
  };
}
