import { TwFollowCard } from "./assets/twFollowCard";

export const App = () => {
  const formatUserName = (username) => `@${username}`;

  return (
    <div className="App">
      <h1 className="title">Twitter 'Who to follow?' card:</h1>
      <TwFollowCard
        initialIsFollowing={false}
        formatUserName={formatUserName}
        userat={"FedeMaciel24"}
        username={"Elmacielon"}
      />
      <TwFollowCard
        initialIsFollowing //initialIsFollowing se setea a true
        formatUserName={formatUserName}
        userat={"midudev"}
        username={"Miguel Angel"}
      />
      <TwFollowCard
        initialIsFollowing={true}
        formatUserName={formatUserName}
        userat={"elonmusk"}
        username={"Elon Musk"}
      />
      <TwFollowCard
        //* initialIsFollowing seria undefined
        formatUserName={formatUserName}
        userat={"pheralb"}
        username={"Pablo Hernandez"}
      />
    </div>
  );
};
