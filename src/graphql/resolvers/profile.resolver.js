function resolver(app) {
  const profileService = app.service('api/profile');

  const profileResolver = {
    profiles: async () => {
      const response = await profileService.find({});
      return response.data;
    },
    addProfile: async (args) => {
      const document = {
        firstName: args.firstName,
        middleName: args.middleName,
        lastName: args.lastName
      };

      const response = await profileService.create(document);
      return response;
    }    
  };

  return profileResolver;
}

module.exports = resolver;