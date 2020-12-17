import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Lolly = {
  __typename?: 'Lolly';
  first: Scalars['String'];
  second: Scalars['String'];
  third: Scalars['String'];
  from: Scalars['String'];
  message: Scalars['String'];
  giftedto: Scalars['String'];
  url: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addLolly?: Maybe<Lolly>;
};


export type MutationAddLollyArgs = {
  first: Scalars['String'];
  second: Scalars['String'];
  third: Scalars['String'];
  from: Scalars['String'];
  message: Scalars['String'];
  giftedto: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getLolly?: Maybe<Array<Maybe<Lolly>>>;
  getByUrl?: Maybe<Lolly>;
};


export type QueryGetByUrlArgs = {
  url: Scalars['String'];
};


export type LollyurlQueryVariables = Exact<{
  url: Scalars['String'];
}>;


export type LollyurlQuery = (
  { __typename?: 'Query' }
  & { getByUrl?: Maybe<(
    { __typename?: 'Lolly' }
    & Pick<Lolly, 'first' | 'second' | 'third' | 'from' | 'message' | 'giftedto' | 'url'>
  )> }
);

export type AddLollyMutationVariables = Exact<{
  first: Scalars['String'];
  second: Scalars['String'];
  third: Scalars['String'];
  from: Scalars['String'];
  message: Scalars['String'];
  giftedto: Scalars['String'];
}>;


export type AddLollyMutation = (
  { __typename?: 'Mutation' }
  & { addLolly?: Maybe<(
    { __typename?: 'Lolly' }
    & Pick<Lolly, 'url'>
  )> }
);


export const LollyurlDocument = gql`
    query lollyurl($url: String!) {
  getByUrl(url: $url) {
    first
    second
    third
    from
    message
    giftedto
    url
  }
}
    `;

/**
 * __useLollyurlQuery__
 *
 * To run a query within a React component, call `useLollyurlQuery` and pass it any options that fit your needs.
 * When your component renders, `useLollyurlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLollyurlQuery({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useLollyurlQuery(baseOptions: Apollo.QueryHookOptions<LollyurlQuery, LollyurlQueryVariables>) {
        return Apollo.useQuery<LollyurlQuery, LollyurlQueryVariables>(LollyurlDocument, baseOptions);
      }
export function useLollyurlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LollyurlQuery, LollyurlQueryVariables>) {
          return Apollo.useLazyQuery<LollyurlQuery, LollyurlQueryVariables>(LollyurlDocument, baseOptions);
        }
export type LollyurlQueryHookResult = ReturnType<typeof useLollyurlQuery>;
export type LollyurlLazyQueryHookResult = ReturnType<typeof useLollyurlLazyQuery>;
export type LollyurlQueryResult = Apollo.QueryResult<LollyurlQuery, LollyurlQueryVariables>;
export const AddLollyDocument = gql`
    mutation addLolly($first: String!, $second: String!, $third: String!, $from: String!, $message: String!, $giftedto: String!) {
  addLolly(first: $first, second: $second, third: $third, from: $from, message: $message, giftedto: $giftedto) {
    url
  }
}
    `;
export type AddLollyMutationFn = Apollo.MutationFunction<AddLollyMutation, AddLollyMutationVariables>;

/**
 * __useAddLollyMutation__
 *
 * To run a mutation, you first call `useAddLollyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddLollyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addLollyMutation, { data, loading, error }] = useAddLollyMutation({
 *   variables: {
 *      first: // value for 'first'
 *      second: // value for 'second'
 *      third: // value for 'third'
 *      from: // value for 'from'
 *      message: // value for 'message'
 *      giftedto: // value for 'giftedto'
 *   },
 * });
 */
export function useAddLollyMutation(baseOptions?: Apollo.MutationHookOptions<AddLollyMutation, AddLollyMutationVariables>) {
        return Apollo.useMutation<AddLollyMutation, AddLollyMutationVariables>(AddLollyDocument, baseOptions);
      }
export type AddLollyMutationHookResult = ReturnType<typeof useAddLollyMutation>;
export type AddLollyMutationResult = Apollo.MutationResult<AddLollyMutation>;
export type AddLollyMutationOptions = Apollo.BaseMutationOptions<AddLollyMutation, AddLollyMutationVariables>;