import { ApolloProvider } from "@apollo/client";
import { client } from "@/graphql";
import { PostProvider } from "@/context/PostContext";
import { Wrapper, PostList } from "@/components";

function App() {
  return (
    <ApolloProvider client={client}>
      <PostProvider>
        <Wrapper>
          <PostList />
        </Wrapper>
      </PostProvider>
    </ApolloProvider>
  );
}

export default App;
