/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMyType = /* GraphQL */ `
  mutation CreateMyType(
    $input: CreateMyTypeInput!
    $condition: ModelMyTypeConditionInput
  ) {
    createMyType(input: $input, condition: $condition) {
      id
      title
      content
      price
      rating
    }
  }
`;
export const updateMyType = /* GraphQL */ `
  mutation UpdateMyType(
    $input: UpdateMyTypeInput!
    $condition: ModelMyTypeConditionInput
  ) {
    updateMyType(input: $input, condition: $condition) {
      id
      title
      content
      price
      rating
    }
  }
`;
export const deleteMyType = /* GraphQL */ `
  mutation DeleteMyType(
    $input: DeleteMyTypeInput!
    $condition: ModelMyTypeConditionInput
  ) {
    deleteMyType(input: $input, condition: $condition) {
      id
      title
      content
      price
      rating
    }
  }
`;
export const createVodAsset = /* GraphQL */ `
  mutation CreateVodAsset(
    $input: CreateVodAssetInput!
    $condition: ModelvodAssetConditionInput
  ) {
    createVodAsset(input: $input, condition: $condition) {
      id
      title
      description
      video {
        id
      }
    }
  }
`;
export const updateVodAsset = /* GraphQL */ `
  mutation UpdateVodAsset(
    $input: UpdateVodAssetInput!
    $condition: ModelvodAssetConditionInput
  ) {
    updateVodAsset(input: $input, condition: $condition) {
      id
      title
      description
      video {
        id
      }
    }
  }
`;
export const deleteVodAsset = /* GraphQL */ `
  mutation DeleteVodAsset(
    $input: DeleteVodAssetInput!
    $condition: ModelvodAssetConditionInput
  ) {
    deleteVodAsset(input: $input, condition: $condition) {
      id
      title
      description
      video {
        id
      }
    }
  }
`;
export const createVideoObject = /* GraphQL */ `
  mutation CreateVideoObject(
    $input: CreateVideoObjectInput!
    $condition: ModelvideoObjectConditionInput
  ) {
    createVideoObject(input: $input, condition: $condition) {
      id
    }
  }
`;
export const updateVideoObject = /* GraphQL */ `
  mutation UpdateVideoObject(
    $input: UpdateVideoObjectInput!
    $condition: ModelvideoObjectConditionInput
  ) {
    updateVideoObject(input: $input, condition: $condition) {
      id
    }
  }
`;
export const deleteVideoObject = /* GraphQL */ `
  mutation DeleteVideoObject(
    $input: DeleteVideoObjectInput!
    $condition: ModelvideoObjectConditionInput
  ) {
    deleteVideoObject(input: $input, condition: $condition) {
      id
    }
  }
`;
