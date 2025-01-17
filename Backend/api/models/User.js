/**
 * User.js
 *
 * A user who can log in to this application.
 */

module.exports = {

    attributes: {
  
     
  
      emailAddress: {
        type: 'string',
        required: true,
        unique: true,
        isEmail: true,
        maxLength: 200,
        example: 'mary.sue@example.com'
      },
     
      password: {
        type: 'string',
        required: true,
        description: 'Securely hashed representation of the user\'s login password.',
        protect: true,
        example: '2$28a8eabna301089103-13948134nad'
      },
  
      fullName: {
        type: 'string',
        required: true,
        description: 'Full representation of the user\'s name.',
        maxLength: 120,
        example: 'Mary Sue van der McHenst'
      },
      phoneNumber: {
        type: 'number',
        description: 'Number of the customers name',
        example: '015754241069'
      },

      address: {
        type: 'string',
        description: 'Address of the customer',
        maxLength: 120,
        example: 'Taegermoostr. 27, 78462 Konstanz'
      },
  
      isSuperAdmin: {
        type: 'boolean',
        description: 'Whether this user is a "super admin" with extra permissions, etc.',
        extendedDescription:
  `Super admins might have extra permissions, see a different default home page when they log in,
  or even have a completely different feature set from normal users.  In this app, the \`isSuperAdmin\`
  flag is just here as a simple way to represent two different kinds of users.  Usually, it's a good idea
  to keep the data model as simple as possible, only adding attributes when you actually need them for
  features being built right now.
  
  For example, a "super admin" user for a small to medium-sized e-commerce website might be able to
  change prices, deactivate seasonal categories, add new offerings, and view live orders as they come in.
  On the other hand, for an e-commerce website like Walmart.com that has undergone years of development
  by a large team, those administrative features might be split across a few different roles.
  
  So, while this \`isSuperAdmin\` demarcation might not be the right approach forever, it's a good place to start.`
      },


      tickets: {
        collection: 'ticketkauf', 
        via: 'userId', 
      },
    },
  
  
  };
  