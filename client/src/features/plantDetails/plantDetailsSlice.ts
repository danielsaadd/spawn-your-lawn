import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface PlantDetailsState {
  id: number;
  common_name: string;
  scientific_name: string[];
  other_name: string[];
  family: string;
  origin: string;
  type: string;
  dimension: string;
  cycle: string;
  watering: string;
  attracts: string[];
  propagation: string[];
  hardiness: {
    min: string;
    max: string;
  };
  hardiness_location: {
    full_url: string;
    full_iframe: string;
  };
  flowers: boolean;
  flowering_season: string;
  color: string;
  sunlight: string[];
  soil: string[];
  problem: string;
  pest_susceptibility: string;
  cones: boolean;
  fruits: boolean;
  edible_fruit: boolean;
  edible_fruit_taste_profile: string;
  fruit_nutritional_value: string;
  fruit_color: string;
  fruiting_season: string;
  harvest_season: string;
  harvest_method: string;
  leaf: boolean;
  leaf_color: string[];
  edible_leaf: boolean;
  edible_leaf_taste_profile: string;
  leaf_nutritional_value: string;
  growth_rate: string;
  maintenance: {
    section: {
      id: number;
      type: string;
      description: string;
    }[];
  } | string;
  medicinal: boolean;
  medicinal_use: string;
  medicinal_method: string;
  poisonous_to_humans: boolean;
  poison_effects_to_humans: string;
  poison_to_humans_cure: string;
  poisonous_to_pets: boolean;
  poison_effects_to_pets: string;
  poison_to_pets_cure: string;
  drought_tolerant: boolean;
  salt_tolerant: boolean;
  thorny: boolean;
  invasive: boolean;
  rare: boolean;
  rare_level: string;
  tropical: boolean;
  cuisine: boolean;
  cuisine_list: string;
  indoor: boolean;
  care_level: string;
  description: string;
  default_image: {
    image_id: number;
    license: number;
    license_name: string;
    license_url: string;
    original_url: string;
    regular_url: string;
    medium_url: string;
    small_url: string;
    thumbnail: string;
  };
}

const initialState: PlantDetailsState = {
  id: 0,
  common_name: '',
  scientific_name: [],
  other_name: [],
  family: '',
  origin: '',
  type: '',
  dimension: '',
  cycle: '',
  watering: '',
  attracts: [],
  propagation: [],
  hardiness: {
    min: '',
    max: '',
  },
  hardiness_location: {
    full_url: '',
    full_iframe: '',
  },
  flowers: false,
  flowering_season: '',
  color: '',
  sunlight: [],
  soil: [],
  problem: '',
  pest_susceptibility: '',
  cones: false,
  fruits: false,
  edible_fruit: false,
  edible_fruit_taste_profile: '',
  fruit_nutritional_value: '',
  fruit_color: '',
  fruiting_season: '',
  harvest_season: '',
  harvest_method: '',
  leaf: false,
  leaf_color: [],
  edible_leaf: false,
  edible_leaf_taste_profile: '',
  leaf_nutritional_value: '',
  growth_rate: '',
  maintenance: '',
  medicinal: false,
  medicinal_use: '',
  medicinal_method: '',
  poisonous_to_humans: false,
  poison_effects_to_humans: '',
  poison_to_humans_cure: '',
  poisonous_to_pets: false,
  poison_effects_to_pets: '',
  poison_to_pets_cure: '',
  drought_tolerant: false,
  salt_tolerant: false,
  thorny: false,
  invasive: false,
  rare: false,
  rare_level: '',
  tropical: false,
  cuisine: false,
  cuisine_list: '',
  indoor: false,
  care_level: '',
  description: '',
  default_image: {
    image_id: 0,
    license: 0,
    license_name: '',
    license_url: '',
    original_url: '',
    regular_url: '',
    medium_url: '',
    small_url: '',
    thumbnail: '',
  },
};
export const plantDetailsSlice = createSlice({
  name: 'plantDetails',
  initialState: initialState,
  reducers: {
    setPlantDetails: (state, action: PayloadAction<PlantDetailsState>) => {
      return {
        ...state,
        ...action.payload
      };
    },
  }
});

export const {
  setPlantDetails
} = plantDetailsSlice.actions;
