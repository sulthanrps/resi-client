import { gql } from "@apollo/client";

export const LOGIN = gql`
    mutation Mutation($email: String, $password: String) {
        login(email: $email, password: $password) {
            access_token
        }
    }
`

export const REGISTER = gql`
    mutation Register($name: String, $email: String, $password: String, $profileImg: String, $phoneNumber: String, $role: String) {
    register(name: $name, email: $email, password: $password, profileImg: $profileImg, phoneNumber: $phoneNumber, role: $role) {
        access_token
    }
}
`

export const LOGGED_USER = gql`
    query fetchCustomer($getUserAccessToken2: String) {
        getUser(access_token: $getUserAccessToken2) {
            id
            email
            name
            profileImg
            balance
            phoneNumber
        }
    }
`

export const EDIT_PROFILE = gql`
    mutation Mutation($name: String, $email: String, $phoneNumber: String, $profileImg: String, $accessToken: String) {
    updateProfile(name: $name, email: $email, phoneNumber: $phoneNumber, profileImg: $profileImg, access_token: $accessToken) {
        message
    }
}
`

export const TOP_UP = gql`
    mutation TopUp($nominal: Int, $accessToken: String) {
        topUpMidtrans(nominal: $nominal, access_token: $accessToken) {
            redirect_url
        }
    }
`

export const FETCH_BIKES = gql`
    query Query($accessToken: String) {
    getBikes(access_token: $accessToken) {
        id
        name
        imgUrl
        price
    }
}
`

export const CREATE_BOOK = gql`
    mutation CreateBook(
        $bookDate: String!, 
        $bikeId: Int!, 
        $scheduleId: Int!, 
        $lon: String!, 
        $lat: String!, 
        $accessToken: String, 
        $grandTotal: Int) 
        {
            createBook(BookDate: $bookDate, BikeId: $bikeId, ScheduleId: $scheduleId, lon: $lon, lat: $lat, access_token: $accessToken, GrandTotal: $grandTotal) {
                id
            }
        }
`

export const GET_BOOK = gql`
    query Query($accessToken: String) {
        getBooksPending(access_token: $accessToken) {
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
`

export const GET_DETAIL_BOOK = gql`
query GetBooksByBooksId($accessToken: String, $id: ID) {
  getBooksByBooksId(access_token: $accessToken, id: $id) {
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
`