import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($email: String, $password: String) {
    login(email: $email, password: $password) {
      access_token
    }
  }
`;

export const INPUT_WASHER_ID = gql`
  mutation Mutation($washerPickBookId: ID, $accessToken: String) {
    washerPickBook(id: $washerPickBookId, access_token: $accessToken) {
      message
    }
  }
`;

export const EDIT_USER = gql`
  mutation Mutation(
    $name: String
    $phoneNumber: String
    $email: String
    $profileImg: String
    $accessToken: String
  ) {
    updateProfile(
      name: $name
      phoneNumber: $phoneNumber
      email: $email
      profileImg: $profileImg
      access_token: $accessToken
    ) {
      message
    }
  }
`;

export const REGISTER = gql`
  mutation Mutation(
    $name: String
    $email: String
    $password: String
    $phoneNumber: String
    $profileImg: String
    $role: String
  ) {
    register(
      name: $name
      email: $email
      password: $password
      phoneNumber: $phoneNumber
      profileImg: $profileImg
      role: $role
    ) {
      access_token
    }
  }
`;

export const GET_USER = gql`
  query ExampleQuery($accessToken: String) {
    getUser(access_token: $accessToken) {
      id
      email
      name
      role
      profileImg
      balance
      phoneNumber
      address
    }
  }
`;

export const GET_ORDER = gql`
  query GetBooksPending(
    $accessToken: String
    $lon: String
    $lat: String
    $dist: Int
  ) {
    getWasherBooksPending(
      access_token: $accessToken
      lon: $lon
      lat: $lat
      dist: $dist
    ) {
      id
      UserId
      BookDate
      GrandTotal
      BikeId
      WasherId
      ScheduleId
      status
      location
      distance
      Bike {
        id
        name
        imgUrl
        price
      }
    }
  }
`;

export const GET_ORDER_TAKEN = gql`
  query Query($accessToken: String) {
    getWasherBooks(access_token: $accessToken) {
      id
      UserId
      BookDate
      GrandTotal
      BikeId
      WasherId
      ScheduleId
      status
      location
      Customer {
        id
        email
        name
        role
        profileImg
        balance
        phoneNumber
        address
      }
      Washer {
        id
        email
        name
        role
        profileImg
        balance
        phoneNumber
        address
      }
      distance
      Bike {
        id
        name
        imgUrl
        price
      }
    }
  }
`;

export const CHANGE_STATUS = gql`
  mutation Mutation(
    $washerUpdateBookId: ID
    $accessToken: String
    $status: String
  ) {
    washerUpdateBook(
      id: $washerUpdateBookId
      access_token: $accessToken
      status: $status
    ) {
      message
    }
  }
`;

export const BOOK_TAKEN_BY_ID = gql`
  query Query($accessToken: String, $getWasherBooksByBooksIdId: ID) {
    getWasherBooksByBooksId(
      access_token: $accessToken
      id: $getWasherBooksByBooksIdId
    ) {
      id
      UserId
      BookDate
      GrandTotal
      BikeId
      WasherId
      ScheduleId
      status
      location
      Customer {
        id
        email
        name
        role
        profileImg
        balance
        phoneNumber
        address
      }
      Washer {
        id
        email
        name
        role
        profileImg
        balance
        phoneNumber
        address
      }
      distance
      Bike {
        id
        name
        imgUrl
        price
      }
    }
  }
`;
