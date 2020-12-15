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

export type Bookmark = {
  __typename?: 'Bookmark';
  id: Scalars['ID'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Mutation = {
  __typename?: 'Mutation';
  addBM?: Maybe<Bookmark>;
  delBM?: Maybe<Bookmark>;
};


export type MutationAddBmArgs = {
  title: Scalars['String'];
  url: Scalars['String'];
};


export type MutationDelBmArgs = {
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  bookmarks?: Maybe<Array<Bookmark>>;
};


export type AllbookmarksQueryVariables = Exact<{ [key: string]: never; }>;


export type AllbookmarksQuery = (
  { __typename?: 'Query' }
  & { bookmarks?: Maybe<Array<(
    { __typename?: 'Bookmark' }
    & Pick<Bookmark, 'title' | 'id' | 'url'>
  )>> }
);

export type AddBmMutationVariables = Exact<{
  title: Scalars['String'];
  url: Scalars['String'];
}>;


export type AddBmMutation = (
  { __typename?: 'Mutation' }
  & { addBM?: Maybe<(
    { __typename?: 'Bookmark' }
    & Pick<Bookmark, 'id'>
  )> }
);

export type DelBmMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DelBmMutation = (
  { __typename?: 'Mutation' }
  & { delBM?: Maybe<(
    { __typename?: 'Bookmark' }
    & Pick<Bookmark, 'id'>
  )> }
);


export const AllbookmarksDocument = gql`
    query allbookmarks {
  bookmarks {
    title
    id
    url
  }
}
    `;

/**
 * __useAllbookmarksQuery__
 *
 * To run a query within a React component, call `useAllbookmarksQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllbookmarksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllbookmarksQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllbookmarksQuery(baseOptions?: Apollo.QueryHookOptions<AllbookmarksQuery, AllbookmarksQueryVariables>) {
        return Apollo.useQuery<AllbookmarksQuery, AllbookmarksQueryVariables>(AllbookmarksDocument, baseOptions);
      }
export function useAllbookmarksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllbookmarksQuery, AllbookmarksQueryVariables>) {
          return Apollo.useLazyQuery<AllbookmarksQuery, AllbookmarksQueryVariables>(AllbookmarksDocument, baseOptions);
        }
export type AllbookmarksQueryHookResult = ReturnType<typeof useAllbookmarksQuery>;
export type AllbookmarksLazyQueryHookResult = ReturnType<typeof useAllbookmarksLazyQuery>;
export type AllbookmarksQueryResult = Apollo.QueryResult<AllbookmarksQuery, AllbookmarksQueryVariables>;
export const AddBmDocument = gql`
    mutation addBM($title: String!, $url: String!) {
  addBM(title: $title, url: $url) {
    id
  }
}
    `;
export type AddBmMutationFn = Apollo.MutationFunction<AddBmMutation, AddBmMutationVariables>;

/**
 * __useAddBmMutation__
 *
 * To run a mutation, you first call `useAddBmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBmMutation, { data, loading, error }] = useAddBmMutation({
 *   variables: {
 *      title: // value for 'title'
 *      url: // value for 'url'
 *   },
 * });
 */
export function useAddBmMutation(baseOptions?: Apollo.MutationHookOptions<AddBmMutation, AddBmMutationVariables>) {
        return Apollo.useMutation<AddBmMutation, AddBmMutationVariables>(AddBmDocument, baseOptions);
      }
export type AddBmMutationHookResult = ReturnType<typeof useAddBmMutation>;
export type AddBmMutationResult = Apollo.MutationResult<AddBmMutation>;
export type AddBmMutationOptions = Apollo.BaseMutationOptions<AddBmMutation, AddBmMutationVariables>;
export const DelBmDocument = gql`
    mutation delBM($id: String!) {
  delBM(id: $id) {
    id
  }
}
    `;
export type DelBmMutationFn = Apollo.MutationFunction<DelBmMutation, DelBmMutationVariables>;

/**
 * __useDelBmMutation__
 *
 * To run a mutation, you first call `useDelBmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelBmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [delBmMutation, { data, loading, error }] = useDelBmMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDelBmMutation(baseOptions?: Apollo.MutationHookOptions<DelBmMutation, DelBmMutationVariables>) {
        return Apollo.useMutation<DelBmMutation, DelBmMutationVariables>(DelBmDocument, baseOptions);
      }
export type DelBmMutationHookResult = ReturnType<typeof useDelBmMutation>;
export type DelBmMutationResult = Apollo.MutationResult<DelBmMutation>;
export type DelBmMutationOptions = Apollo.BaseMutationOptions<DelBmMutation, DelBmMutationVariables>;