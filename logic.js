/*
    Query bei Axie ID für: 
        id
        image link
        class
        eth owner
        ProfileName

    {"operationName":"GetAxieDetail","variables":{"axieId":"13968"},"query":"query GetAxieDetail($axieId: ID!) {\n  axie(axieId: $axieId) {\n    ...AxieDetail\n    __typename\n  }\n}\n\nfragment AxieDetail on Axie {\n  id\n  image\n  class\n  owner\n  ownerProfile {\n    name\n    __typename\n  }\n  __typename\n}\n"}
*/