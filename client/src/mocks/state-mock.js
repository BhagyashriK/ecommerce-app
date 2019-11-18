/**
 * mocked redux state
 */

const getMockedState = () => ({
  patients: {
    list: [
      {
        id: 1,
        name: "Sonali Kulkarni",
        drName: "Jayant Indurkar",
        gender: "Female",
        dateOfBirth: 655547400000,
        description:
          "Occurance of cyst located near the tailbone. There is pain, reddened skin or drainage of pus and blood. reatment involves drainage and surgical removal of the cyst.adsasd",
        status: "PLANNED",
        plannedOn: "2019-11-21T10:30:00.000Z",
        endOn: "2019-11-21T12:30:00.000Z",
        room: "1009"
      },
      {
        name: "Laxmikant Berde",
        gender: "male",
        drName: "Kalyan Joshi",
        room: "1102",
        dateOfBirth: 88453800000,
        id: 2,
        status: "PLANNED",
        plannedOn: "2019-11-11T00:30:00.000Z",
        endOn: "2019-11-11T01:00:00.000Z",
        description: "ftgyhujikolp;"
      },
      {
        name: "dgsfhjkvcl",
        gender: "other",
        drName: "Jayant Indurkar",
        room: "1102",
        dateOfBirth: 1573410600000,
        id: 3
      }
    ],
    isLoading: false,
    errorMessage: null
  }
});

export default getMockedState;
