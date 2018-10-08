const profileMutation = `
    type Mutation {
        addProfile(firstName: String, middleName: String, lastName: String) : Profile
    }
`;

module.exports = profileMutation;