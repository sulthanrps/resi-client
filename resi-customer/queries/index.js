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