import "./UserGreeting.scss";

type Props = {
  isLoggedIn: boolean;
  userName: string;
};

export function UserGreeting({ isLoggedIn, userName }: Props) {
  //   if (props.isLoggedIn) {
  //     return <h2>welcome {props.userName}</h2>;
  //   }
  //   return <h2>please log in to continue</h2>;

  //   return (
  //     <>
  //       <h2> {props.isLoggedIn ? `welcome ${props.userName}` : `please log in to continue`}</h2>
  //     </>
  //   );

  //   return props.isLoggedIn ? <h2>welcome {props.userName}</h2> : <h2>please log in to continue</h2>;

  const welcomeMessage = <h2 className="welcome-message">welcome {userName}</h2>;
  const loginPrompt = <h2 className="login-prompt">please log in to continue</h2>;
  return <>{isLoggedIn ? welcomeMessage : loginPrompt}</>;
}

UserGreeting.defaultProps = {
  isLoggedIn: false,
  userName: "Guest",
};
