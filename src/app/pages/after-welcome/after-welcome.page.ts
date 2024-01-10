import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';



@Component({
  selector: 'app-after-welcome',
  templateUrl: './after-welcome.page.html',
  styleUrls: ['./after-welcome.page.scss'],
})
export class AfterWelcomePage implements OnInit {

  first: any;
  second: any;

  filterTerm!: string;

  selectB_Data = [    
      {
        "StartStation": "Admiralty",
        "DistanceMRT": 19.1,
        "CarbonEmissionMRTkg": 0.25212,
        "DistanceBUS": 22.7,
        "CarbonEmissionBUSkg": 1.6570999999999998,
        "DistanceCAR": 22.049999999999997,
        "CarbonEmissionCARkg": 2.6018999999999997,
        "Type": "Bus",
        "Emission/km (kg)": 0.073
      },
      {
        "StartStation": "Aljunied",
        "DistanceMRT": 9.8,
        "CarbonEmissionMRTkg": 0.12936,
        "DistanceBUS": 9,
        "CarbonEmissionBUSkg": 0.6569999999999999,
        "DistanceCAR": 6.85,
        "CarbonEmissionCARkg": 0.8082999999999999,
        "Type": "Car",
        "Emission/km (kg)": 0.118
      },
      {
        "StartStation": "Ang Mo Kio",
        "DistanceMRT": 5.9,
        "CarbonEmissionMRTkg": 0.07788,
        "DistanceBUS": 8.033333333333333,
        "CarbonEmissionBUSkg": 0.5864333333333333,
        "DistanceCAR": 8.75,
        "CarbonEmissionCARkg": 1.0325,
        "Type": "MRT",
        "Emission/km (kg)": 0.0132
      },
      {
        "StartStation": "Bartley",
        "DistanceMRT": 7.6,
        "CarbonEmissionMRTkg": 0.10031999999999999,
        "DistanceBUS": 7.7,
        "CarbonEmissionBUSkg": 0.5620999999999999,
        "DistanceCAR": 6.8,
        "CarbonEmissionCARkg": 0.8023999999999999
      },
      {
        "StartStation": "Bayfront",
        "DistanceMRT": 7.25,
        "CarbonEmissionMRTkg": 0.0957,
        "DistanceBUS": 5.4,
        "CarbonEmissionBUSkg": 0.3942,
        "DistanceCAR": 7.55,
        "CarbonEmissionCARkg": 0.8908999999999999
      },
      {
        "StartStation": "Beauty World",
        "DistanceMRT": 9.2,
        "CarbonEmissionMRTkg": 0.12143999999999999,
        "DistanceBUS": 9.7,
        "CarbonEmissionBUSkg": 0.7081,
        "DistanceCAR": 10.2,
        "CarbonEmissionCARkg": 1.2035999999999998
      },
      {
        "StartStation": "Bedok",
        "DistanceMRT": 15.1,
        "CarbonEmissionMRTkg": 0.19932,
        "DistanceBUS": 13.6,
        "CarbonEmissionBUSkg": 0.9927999999999999,
        "DistanceCAR": 12.05,
        "CarbonEmissionCARkg": 1.4219
      },
      {
        "StartStation": "Bedok North",
        "DistanceMRT": 14.8,
        "CarbonEmissionMRTkg": 0.19536,
        "DistanceBUS": 11.55,
        "CarbonEmissionBUSkg": 0.84315,
        "DistanceCAR": 12.166666666666666,
        "CarbonEmissionCARkg": 1.4356666666666664
      },
      {
        "StartStation": "Bedok Reservoir",
        "DistanceMRT": 15.6,
        "CarbonEmissionMRTkg": 0.20592,
        "DistanceBUS": 14.5,
        "CarbonEmissionBUSkg": 1.0585,
        "DistanceCAR": 12.100000000000001,
        "CarbonEmissionCARkg": 1.4278000000000002
      },
      {
        "StartStation": "Bencoolen",
        "DistanceMRT": 3.1,
        "CarbonEmissionMRTkg": 0.04092,
        "DistanceBUS": 3,
        "CarbonEmissionBUSkg": 0.21899999999999997,
        "DistanceCAR": 4.633333333333333,
        "CarbonEmissionCARkg": 0.5467333333333333
      },
      {
        "StartStation": "Bendemeer",
        "DistanceMRT": 6.9,
        "CarbonEmissionMRTkg": 0.09108000000000001,
        "DistanceBUS": 4.6,
        "CarbonEmissionBUSkg": 0.33579999999999993,
        "DistanceCAR": 3.4,
        "CarbonEmissionCARkg": 0.40119999999999995
      },
      {
        "StartStation": "Bishan",
        "DistanceMRT": 3.5,
        "CarbonEmissionMRTkg": 0.0462,
        "DistanceBUS": "N/A",
        "CarbonEmissionBUSkg": 0,
        "DistanceCAR": 5.85,
        "CarbonEmissionCARkg": 0.6902999999999999
      },
      {
        "StartStation": "Boon Keng",
        "DistanceMRT": 7.2,
        "CarbonEmissionMRTkg": 0.09504,
        "DistanceBUS": 2.7,
        "CarbonEmissionBUSkg": 0.1971,
        "DistanceCAR": 4.15,
        "CarbonEmissionCARkg": 0.4897
      },
      {
        "StartStation": "Boon Lay",
        "DistanceMRT": 26.1,
        "CarbonEmissionMRTkg": 0.34452,
        "DistanceBUS": 29.100000000000005,
        "CarbonEmissionBUSkg": 2.1243000000000003,
        "DistanceCAR": 22.2,
        "CarbonEmissionCARkg": 2.6195999999999997
      },
      {
        "StartStation": "Botanic Gardens",
        "DistanceMRT": 4,
        "CarbonEmissionMRTkg": 0.0528,
        "DistanceBUS": 5,
        "CarbonEmissionBUSkg": 0.365,
        "DistanceCAR": 5.75,
        "CarbonEmissionCARkg": 0.6785
      },
      {
        "StartStation": "Braddell",
        "DistanceMRT": 2.4,
        "CarbonEmissionMRTkg": 0.03168,
        "DistanceBUS": "N/A",
        "CarbonEmissionBUSkg": 0,
        "DistanceCAR": 3.55,
        "CarbonEmissionCARkg": 0.41889999999999994
      },
      {
        "StartStation": "Bras Basah",
        "DistanceMRT": 4.7,
        "CarbonEmissionMRTkg": 0.062040000000000005,
        "DistanceBUS": 3.65,
        "CarbonEmissionBUSkg": 0.26644999999999996,
        "DistanceCAR": 5,
        "CarbonEmissionCARkg": 0.59
      },
      {
        "StartStation": "Buangkok",
        "DistanceMRT": 13.35,
        "CarbonEmissionMRTkg": 0.17622,
        "DistanceBUS": 12.3,
        "CarbonEmissionBUSkg": 0.8979,
        "DistanceCAR": 14.100000000000001,
        "CarbonEmissionCARkg": 1.6638000000000002
      },
      {
        "StartStation": "Bugis",
        "DistanceMRT": 6.2,
        "CarbonEmissionMRTkg": 0.08184,
        "DistanceBUS": 2.9,
        "CarbonEmissionBUSkg": 0.21169999999999997,
        "DistanceCAR": 4.2,
        "CarbonEmissionCARkg": 0.4956
      },
      {
        "StartStation": "Bukit Batok",
        "DistanceMRT": 34,
        "CarbonEmissionMRTkg": 0.4488,
        "DistanceBUS": 14.75,
        "CarbonEmissionBUSkg": 1.0767499999999999,
        "DistanceCAR": 13.700000000000001,
        "CarbonEmissionCARkg": 1.6166
      },
      {
        "StartStation": "Bukit Gombak",
        "DistanceMRT": 32.8,
        "CarbonEmissionMRTkg": 0.43295999999999996,
        "DistanceBUS": 35.6,
        "CarbonEmissionBUSkg": 2.5987999999999998,
        "DistanceCAR": 14.2,
        "CarbonEmissionCARkg": 1.6755999999999998
      },
      {
        "StartStation": "Bukit Panjang",
        "DistanceMRT": 13.850000000000001,
        "CarbonEmissionMRTkg": 0.18282,
        "DistanceBUS": 16.9,
        "CarbonEmissionBUSkg": 1.2336999999999998,
        "DistanceCAR": 13.649999999999999,
        "CarbonEmissionCARkg": 1.6106999999999998
      },
      {
        "StartStation": "Buona Vista",
        "DistanceMRT": 14.9,
        "CarbonEmissionMRTkg": 0.19668,
        "DistanceBUS": 9,
        "CarbonEmissionBUSkg": 0.6569999999999999,
        "DistanceCAR": 11.100000000000001,
        "CarbonEmissionCARkg": 1.3098
      },
      {
        "StartStation": "Caldecott",
        "DistanceMRT": 3.3,
        "CarbonEmissionMRTkg": 0.043559999999999995,
        "DistanceBUS": 2.5,
        "CarbonEmissionBUSkg": 0.1825,
        "DistanceCAR": 2.5,
        "CarbonEmissionCARkg": 0.295
      },
      {
        "StartStation": "Canberra",
        "DistanceMRT": 15.3,
        "CarbonEmissionMRTkg": 0.20196,
        "DistanceBUS": 16.450000000000003,
        "CarbonEmissionBUSkg": 1.2008500000000002,
        "DistanceCAR": 20.75,
        "CarbonEmissionCARkg": 2.4484999999999997
      },
      {
        "StartStation": "Cashew",
        "DistanceMRT": 12.8,
        "CarbonEmissionMRTkg": 0.16896,
        "DistanceBUS": 13,
        "CarbonEmissionBUSkg": 0.949,
        "DistanceCAR": 13.5,
        "CarbonEmissionCARkg": 1.593
      },
      {
        "StartStation": "Changi Airport",
        "DistanceMRT": 23.4,
        "CarbonEmissionMRTkg": 0.30888,
        "DistanceBUS": 25.8,
        "CarbonEmissionBUSkg": 1.8834,
        "DistanceCAR": 21.950000000000003,
        "CarbonEmissionCARkg": 2.5901
      },
      {
        "StartStation": "Chinatown",
        "DistanceMRT": 6.3,
        "CarbonEmissionMRTkg": 0.08316,
        "DistanceBUS": 6.6,
        "CarbonEmissionBUSkg": 0.48179999999999995,
        "DistanceCAR": 6.4,
        "CarbonEmissionCARkg": 0.7552
      },
      {
        "StartStation": "Chinese Garden",
        "DistanceMRT": 23,
        "CarbonEmissionMRTkg": 0.3036,
        "DistanceBUS": 18.9,
        "CarbonEmissionBUSkg": 1.3796999999999997,
        "DistanceCAR": 16.5,
        "CarbonEmissionCARkg": 1.9469999999999998
      },
      {
        "StartStation": "Choa Chu Kang",
        "DistanceMRT": 29.5,
        "CarbonEmissionMRTkg": 0.3894,
        "DistanceBUS": 17,
        "CarbonEmissionBUSkg": 1.2409999999999999,
        "DistanceCAR": 17.15,
        "CarbonEmissionCARkg": 2.0237
      },
      {
        "StartStation": "City Hall",
        "DistanceMRT": 5.2,
        "CarbonEmissionMRTkg": 0.06864,
        "DistanceBUS": "N/A",
        "CarbonEmissionBUSkg": 0,
        "DistanceCAR": 5.5,
        "CarbonEmissionCARkg": 0.649
      },
      {
        "StartStation": "Clarke Quay",
        "DistanceMRT": 5.95,
        "CarbonEmissionMRTkg": 0.07854,
        "DistanceBUS": 5.3,
        "CarbonEmissionBUSkg": 0.38689999999999997,
        "DistanceCAR": 5.5,
        "CarbonEmissionCARkg": 0.649
      },
      {
        "StartStation": "Clementi",
        "DistanceMRT": 17.9,
        "CarbonEmissionMRTkg": 0.23628,
        "DistanceBUS": 12.6,
        "CarbonEmissionBUSkg": 0.9198,
        "DistanceCAR": 14.75,
        "CarbonEmissionCARkg": 1.7405
      },
      {
        "StartStation": "Commonwealth",
        "DistanceMRT": 13.8,
        "CarbonEmissionMRTkg": 0.18216000000000002,
        "DistanceBUS": 8.433333333333334,
        "CarbonEmissionBUSkg": 0.6156333333333334,
        "DistanceCAR": 8.85,
        "CarbonEmissionCARkg": 1.0443
      },
      {
        "StartStation": "Dakota",
        "DistanceMRT": 10.1,
        "CarbonEmissionMRTkg": 0.13332,
        "DistanceBUS": 7.9,
        "CarbonEmissionBUSkg": 0.5767,
        "DistanceCAR": 8.75,
        "CarbonEmissionCARkg": 1.0325
      },
      {
        "StartStation": "Dhoby Ghaut",
        "DistanceMRT": 4.1,
        "CarbonEmissionMRTkg": 0.054119999999999994,
        "DistanceBUS": 4.2,
        "CarbonEmissionBUSkg": 0.3066,
        "DistanceCAR": 4.2,
        "CarbonEmissionCARkg": 0.4956
      },
      {
        "StartStation": "Dover",
        "DistanceMRT": 16.3,
        "CarbonEmissionMRTkg": 0.21516000000000002,
        "DistanceBUS": 10.5,
        "CarbonEmissionBUSkg": 0.7665,
        "DistanceCAR": 12.8,
        "CarbonEmissionCARkg": 1.5104
      },
      {
        "StartStation": "Downtown",
        "DistanceMRT": 7.6,
        "CarbonEmissionMRTkg": 0.10031999999999999,
        "DistanceBUS": 8.1,
        "CarbonEmissionBUSkg": 0.5912999999999999,
        "DistanceCAR": 6.949999999999999,
        "CarbonEmissionCARkg": 0.8200999999999998
      },
      {
        "StartStation": "Esplanade",
        "DistanceMRT": 5.5,
        "CarbonEmissionMRTkg": 0.0726,
        "DistanceBUS": 4.05,
        "CarbonEmissionBUSkg": 0.29564999999999997,
        "DistanceCAR": 5.5,
        "CarbonEmissionCARkg": 0.649
      },
      {
        "StartStation": "Eunos",
        "DistanceMRT": 12,
        "CarbonEmissionMRTkg": 0.15839999999999999,
        "DistanceBUS": 10.8,
        "CarbonEmissionBUSkg": 0.7884,
        "DistanceCAR": 9.55,
        "CarbonEmissionCARkg": 1.1269
      },
      {
        "StartStation": "Expo",
        "DistanceMRT": 21.1,
        "CarbonEmissionMRTkg": 0.27852,
        "DistanceBUS": 20.950000000000003,
        "CarbonEmissionBUSkg": 1.5293500000000002,
        "DistanceCAR": 15.95,
        "CarbonEmissionCARkg": 1.8820999999999999
      },
      {
        "StartStation": "Farrer Park",
        "DistanceMRT": 6.1,
        "CarbonEmissionMRTkg": 0.08052,
        "DistanceBUS": 2.8333333333333335,
        "CarbonEmissionBUSkg": 0.20683333333333334,
        "DistanceCAR": 2.3,
        "CarbonEmissionCARkg": 0.2714
      },
      {
        "StartStation": "Farrer Road",
        "DistanceMRT": 7.4,
        "CarbonEmissionMRTkg": 0.09768,
        "DistanceBUS": 6.1,
        "CarbonEmissionBUSkg": 0.4453,
        "DistanceCAR": 6.55,
        "CarbonEmissionCARkg": 0.7728999999999999
      },
      {
        "StartStation": "Fort Canning",
        "DistanceMRT": 7.25,
        "CarbonEmissionMRTkg": 0.0957,
        "DistanceBUS": 5.8,
        "CarbonEmissionBUSkg": 0.42339999999999994,
        "DistanceCAR": 4.5,
        "CarbonEmissionCARkg": 0.5309999999999999
      },
      {
        "StartStation": "Geylang Bahru",
        "DistanceMRT": 8.3,
        "CarbonEmissionMRTkg": 0.10956,
        "DistanceBUS": 5.2,
        "CarbonEmissionBUSkg": 0.3796,
        "DistanceCAR": 3.9,
        "CarbonEmissionCARkg": 0.46019999999999994
      },
      {
        "StartStation": "Gul Circle",
        "DistanceMRT": 32.1,
        "CarbonEmissionMRTkg": 0.42372000000000004,
        "DistanceBUS": 30.066666666666666,
        "CarbonEmissionBUSkg": 2.1948666666666665,
        "DistanceCAR": 27.15,
        "CarbonEmissionCARkg": 3.2036999999999995
      },
      {
        "StartStation": "HarbourFront",
        "DistanceMRT": 9.6,
        "CarbonEmissionMRTkg": 0.12672,
        "DistanceBUS": 10.2,
        "CarbonEmissionBUSkg": 0.7445999999999999,
        "DistanceCAR": 9.850000000000001,
        "CarbonEmissionCARkg": 1.1623
      },
      {
        "StartStation": "Haw Par Villa",
        "DistanceMRT": 16.5,
        "CarbonEmissionMRTkg": 0.2178,
        "DistanceBUS": 15.3,
        "CarbonEmissionBUSkg": 1.1169,
        "DistanceCAR": 13.25,
        "CarbonEmissionCARkg": 1.5635
      },
      {
        "StartStation": "Hillview",
        "DistanceMRT": 11.95,
        "CarbonEmissionMRTkg": 0.15774,
        "DistanceBUS": 13.649999999999999,
        "CarbonEmissionBUSkg": 0.9964499999999998,
        "DistanceCAR": 11.9,
        "CarbonEmissionCARkg": 1.4042
      },
      {
        "StartStation": "Holland Village",
        "DistanceMRT": 6.6,
        "CarbonEmissionMRTkg": 0.08711999999999999,
        "DistanceBUS": 8.25,
        "CarbonEmissionBUSkg": 0.60225,
        "DistanceCAR": 7.449999999999999,
        "CarbonEmissionCARkg": 0.8790999999999999
      },
      {
        "StartStation": "Hougang",
        "DistanceMRT": 14.2,
        "CarbonEmissionMRTkg": 0.18744,
        "DistanceBUS": 12.55,
        "CarbonEmissionBUSkg": 0.91615,
        "DistanceCAR": 11.05,
        "CarbonEmissionCARkg": 1.3039
      },
      {
        "StartStation": "Jalan Besar",
        "DistanceMRT": 3.7,
        "CarbonEmissionMRTkg": 0.04884,
        "DistanceBUS": 3.45,
        "CarbonEmissionBUSkg": 0.25185,
        "DistanceCAR": 4,
        "CarbonEmissionCARkg": 0.472
      },
      {
        "StartStation": "Joo Koon",
        "DistanceMRT": 29.8,
        "CarbonEmissionMRTkg": 0.39336,
        "DistanceBUS": 27.13333333333333,
        "CarbonEmissionBUSkg": 1.980733333333333,
        "DistanceCAR": 25.55,
        "CarbonEmissionCARkg": 3.0149
      },
      {
        "StartStation": "Jurong East",
        "DistanceMRT": 28.8,
        "CarbonEmissionMRTkg": 0.38016,
        "DistanceBUS": 18.85,
        "CarbonEmissionBUSkg": 1.37605,
        "DistanceCAR": 17.3,
        "CarbonEmissionCARkg": 2.0414
      },
      {
        "StartStation": "Jurong East",
        "DistanceMRT": 28.8,
        "CarbonEmissionMRTkg": 0.38016,
        "DistanceBUS": 18.95,
        "CarbonEmissionBUSkg": 1.3833499999999999,
        "DistanceCAR": 17.3,
        "CarbonEmissionCARkg": 2.0414
      },
      {
        "StartStation": "Kaki Bukit",
        "DistanceMRT": 12.8,
        "CarbonEmissionMRTkg": 0.16896,
        "DistanceBUS": 11.45,
        "CarbonEmissionBUSkg": 0.8358499999999999,
        "DistanceCAR": 10.4,
        "CarbonEmissionCARkg": 1.2272
      },
      {
        "StartStation": "Kallang",
        "DistanceMRT": 8.3,
        "CarbonEmissionMRTkg": 0.10956,
        "DistanceBUS": 5.633333333333333,
        "CarbonEmissionBUSkg": 0.4112333333333333,
        "DistanceCAR": 5.566666666666666,
        "CarbonEmissionCARkg": 0.6568666666666666
      },
      {
        "StartStation": "Kembangan",
        "DistanceMRT": 13.1,
        "CarbonEmissionMRTkg": 0.17292,
        "DistanceBUS": 10.149999999999999,
        "CarbonEmissionBUSkg": 0.7409499999999999,
        "DistanceCAR": 10.65,
        "CarbonEmissionCARkg": 1.2567
      },
      {
        "StartStation": "Kent Ridge",
        "DistanceMRT": 15.1,
        "CarbonEmissionMRTkg": 0.19932,
        "DistanceBUS": 15.55,
        "CarbonEmissionBUSkg": 1.1351499999999999,
        "DistanceCAR": 11.9,
        "CarbonEmissionCARkg": 1.4042
      },
      {
        "StartStation": "Khatib",
        "DistanceMRT": 12.3,
        "CarbonEmissionMRTkg": 0.16236,
        "DistanceBUS": 13.833333333333334,
        "CarbonEmissionBUSkg": 1.0098333333333334,
        "DistanceCAR": 19.1,
        "CarbonEmissionCARkg": 2.2538
      },
      {
        "StartStation": "King Albert Park",
        "DistanceMRT": 8.1,
        "CarbonEmissionMRTkg": 0.10692,
        "DistanceBUS": 8.3,
        "CarbonEmissionBUSkg": 0.6059,
        "DistanceCAR": 10.1,
        "CarbonEmissionCARkg": 1.1918
      },
      {
        "StartStation": "Kovan",
        "DistanceMRT": 10.5,
        "CarbonEmissionMRTkg": 0.1386,
        "DistanceBUS": 8.9,
        "CarbonEmissionBUSkg": 0.6496999999999999,
        "DistanceCAR": 8.299999999999999,
        "CarbonEmissionCARkg": 0.9793999999999998
      },
      {
        "StartStation": "Kranji",
        "DistanceMRT": 24,
        "CarbonEmissionMRTkg": 0.31679999999999997,
        "DistanceBUS": 21.05,
        "CarbonEmissionBUSkg": 1.5366499999999998,
        "DistanceCAR": 21.85,
        "CarbonEmissionCARkg": 2.5783
      },
      {
        "StartStation": "Labrador Park",
        "DistanceMRT": 15.5,
        "CarbonEmissionMRTkg": 0.2046,
        "DistanceBUS": 11.9,
        "CarbonEmissionBUSkg": 0.8686999999999999,
        "DistanceCAR": 10.833333333333334,
        "CarbonEmissionCARkg": 1.2783333333333333
      },
      {
        "StartStation": "Lakeside",
        "DistanceMRT": 24.4,
        "CarbonEmissionMRTkg": 0.32208,
        "DistanceBUS": 21.75,
        "CarbonEmissionBUSkg": 1.58775,
        "DistanceCAR": 20.85,
        "CarbonEmissionCARkg": 2.4603
      },
      {
        "StartStation": "Lavender",
        "DistanceMRT": 7.3,
        "CarbonEmissionMRTkg": 0.09636,
        "DistanceBUS": 3.3,
        "CarbonEmissionBUSkg": 0.24089999999999998,
        "DistanceCAR": 3.1,
        "CarbonEmissionCARkg": 0.3658
      },
      {
        "StartStation": "Little India",
        "DistanceMRT": 3,
        "CarbonEmissionMRTkg": 0.039599999999999996,
        "DistanceBUS": 1.9,
        "CarbonEmissionBUSkg": 0.1387,
        "DistanceCAR": 2.85,
        "CarbonEmissionCARkg": 0.3363
      },
      {
        "StartStation": "Lorong Chuan",
        "DistanceMRT": 5.4,
        "CarbonEmissionMRTkg": 0.07128000000000001,
        "DistanceBUS": 7.666666666666667,
        "CarbonEmissionBUSkg": 0.5596666666666666,
        "DistanceCAR": 7.5,
        "CarbonEmissionCARkg": 0.885
      },
      {
        "StartStation": "MacPherson",
        "DistanceMRT": 10,
        "CarbonEmissionMRTkg": 0.132,
        "DistanceBUS": 10.75,
        "CarbonEmissionBUSkg": 0.78475,
        "DistanceCAR": 7.3,
        "CarbonEmissionCARkg": 0.8613999999999999
      },
      {
        "StartStation": "Marina Bay",
        "DistanceMRT": 7.2,
        "CarbonEmissionMRTkg": 0.09504,
        "DistanceBUS": 6.3,
        "CarbonEmissionBUSkg": 0.4599,
        "DistanceCAR": 7.25,
        "CarbonEmissionCARkg": 0.8554999999999999
      },
      {
        "StartStation": "Marina South Pier",
        "DistanceMRT": 8.6,
        "CarbonEmissionMRTkg": 0.11352,
        "DistanceBUS": 7.8,
        "CarbonEmissionBUSkg": 0.5693999999999999,
        "DistanceCAR": 11.3,
        "CarbonEmissionCARkg": 1.3334
      },
      {
        "StartStation": "Marsiling",
        "DistanceMRT": 22.3,
        "CarbonEmissionMRTkg": 0.29436,
        "DistanceBUS": 23,
        "CarbonEmissionBUSkg": 1.6789999999999998,
        "DistanceCAR": 20.85,
        "CarbonEmissionCARkg": 2.4603
      },
      {
        "StartStation": "Marymount",
        "DistanceMRT": 5.1,
        "CarbonEmissionMRTkg": 0.06731999999999999,
        "DistanceBUS": 3.6,
        "CarbonEmissionBUSkg": 0.2628,
        "DistanceCAR": 3.4,
        "CarbonEmissionCARkg": 0.40119999999999995
      },
      {
        "StartStation": "Mattar",
        "DistanceMRT": 9.8,
        "CarbonEmissionMRTkg": 0.12936,
        "DistanceBUS": 6.550000000000001,
        "CarbonEmissionBUSkg": 0.47815,
        "DistanceCAR": 7.766666666666666,
        "CarbonEmissionCARkg": 0.9164666666666665
      },
      {
        "StartStation": "Mountbatten",
        "DistanceMRT": 9.3,
        "CarbonEmissionMRTkg": 0.12276000000000001,
        "DistanceBUS": 7.2,
        "CarbonEmissionBUSkg": 0.5256,
        "DistanceCAR": 7.550000000000001,
        "CarbonEmissionCARkg": 0.8909
      },
      {
        "StartStation": "Newton",
        "DistanceMRT": 1.2,
        "CarbonEmissionMRTkg": 0.01584,
        "DistanceBUS": 3.95,
        "CarbonEmissionBUSkg": 0.28835,
        "DistanceCAR": 1.65,
        "CarbonEmissionCARkg": 0.19469999999999998
      },
      {
        "StartStation": "Nicoll Highway",
        "DistanceMRT": 7.1,
        "CarbonEmissionMRTkg": 0.09372,
        "DistanceBUS": 7.2,
        "CarbonEmissionBUSkg": 0.5256,
        "DistanceCAR": 4.2,
        "CarbonEmissionCARkg": 0.4956
      },
      {
        "StartStation": "Novena",
        "DistanceMRT": 0,
        "CarbonEmissionMRTkg": 0,
        "DistanceBUS": 0,
        "CarbonEmissionBUSkg": 0,
        "DistanceCAR": 0,
        "CarbonEmissionCARkg": 0
      },
      {
        "StartStation": "One-North",
        "DistanceMRT": 15.100000000000001,
        "CarbonEmissionMRTkg": 0.19932000000000002,
        "DistanceBUS": 10.6,
        "CarbonEmissionBUSkg": 0.7737999999999999,
        "DistanceCAR": 11.9,
        "CarbonEmissionCARkg": 1.4042
      },
      {
        "StartStation": "Orchard",
        "DistanceMRT": 2.7,
        "CarbonEmissionMRTkg": 0.035640000000000005,
        "DistanceBUS": "N/A",
        "DistanceCAR": 4.25,
        "CarbonEmissionCARkg": 0.5015
      },
      {
        "StartStation": "Outram Park",
        "DistanceMRT": 7.8,
        "CarbonEmissionMRTkg": 0.10296,
        "DistanceBUS": 6.2,
        "CarbonEmissionBUSkg": 0.4526,
        "DistanceCAR": 6.7,
        "CarbonEmissionCARkg": 0.7906
      },
      {
        "StartStation": "Pasir Panjang",
        "DistanceMRT": 17.8,
        "CarbonEmissionMRTkg": 0.23496,
        "DistanceBUS": 14.3,
        "CarbonEmissionBUSkg": 1.0439,
        "DistanceCAR": 14.75,
        "CarbonEmissionCARkg": 1.7405
      },
      {
        "StartStation": "Pasir Ris",
        "DistanceMRT": 23.3,
        "CarbonEmissionMRTkg": 0.30756,
        "DistanceBUS": 20.25,
        "CarbonEmissionBUSkg": 1.4782499999999998,
        "DistanceCAR": 67.9,
        "CarbonEmissionCARkg": 8.0122
      },
      {
        "StartStation": "Paya Lebar",
        "DistanceMRT": 11.100000000000001,
        "CarbonEmissionMRTkg": 0.14652,
        "DistanceBUS": 10.2,
        "CarbonEmissionBUSkg": 0.7445999999999999,
        "DistanceCAR": 7.4,
        "CarbonEmissionCARkg": 0.8732
      },
      {
        "StartStation": "Pioneer",
        "DistanceMRT": 27.1,
        "CarbonEmissionMRTkg": 0.35772000000000004,
        "DistanceBUS": 24.5,
        "CarbonEmissionBUSkg": 1.7885,
        "DistanceCAR": 24.1,
        "CarbonEmissionCARkg": 2.8438
      },
      {
        "StartStation": "Potong Pasir",
        "DistanceMRT": 8.8,
        "CarbonEmissionMRTkg": 0.11616000000000001,
        "DistanceBUS": 4.9,
        "CarbonEmissionBUSkg": 0.3577,
        "DistanceCAR": 4.366666666666666,
        "CarbonEmissionCARkg": 0.5152666666666665
      },
      {
        "StartStation": "Promenade",
        "DistanceMRT": 6.4,
        "CarbonEmissionMRTkg": 0.08448,
        "DistanceBUS": 3.8,
        "CarbonEmissionBUSkg": 0.2774,
        "DistanceCAR": 5.449999999999999,
        "CarbonEmissionCARkg": 0.6430999999999999
      },
      {
        "StartStation": "Punggol",
        "DistanceMRT": 18.1,
        "CarbonEmissionMRTkg": 0.23892000000000002,
        "DistanceBUS": 18.03333333333333,
        "CarbonEmissionBUSkg": 1.3164333333333331,
        "DistanceCAR": 17.25,
        "CarbonEmissionCARkg": 2.0355
      },
      {
        "StartStation": "Queenstown",
        "DistanceMRT": 12.6,
        "CarbonEmissionMRTkg": 0.16632,
        "DistanceBUS": 9.399999999999999,
        "CarbonEmissionBUSkg": 0.6861999999999998,
        "DistanceCAR": 10.25,
        "CarbonEmissionCARkg": 1.2095
      },
      {
        "StartStation": "Raffles Place",
        "DistanceMRT": 6.2,
        "CarbonEmissionMRTkg": 0.08184,
        "DistanceBUS": 6.699999999999999,
        "CarbonEmissionBUSkg": 0.4890999999999999,
        "DistanceCAR": 6.7,
        "CarbonEmissionCARkg": 0.7906
      },
      {
        "StartStation": "Redhill",
        "DistanceMRT": 11.2,
        "CarbonEmissionMRTkg": 0.14784,
        "DistanceBUS": 7.699999999999999,
        "CarbonEmissionBUSkg": 0.5620999999999999,
        "DistanceCAR": 3.1,
        "CarbonEmissionCARkg": 0.3658
      },
      {
        "StartStation": "Rochor",
        "DistanceMRT": 3.3,
        "CarbonEmissionMRTkg": 0.043559999999999995,
        "DistanceBUS": 2.4,
        "CarbonEmissionBUSkg": 0.1752,
        "DistanceCAR": 3.6,
        "CarbonEmissionCARkg": 0.4248
      },
      {
        "StartStation": "Sembawang",
        "DistanceMRT": 16.7,
        "CarbonEmissionMRTkg": 0.22044,
        "DistanceBUS": 17.166666666666668,
        "CarbonEmissionBUSkg": 1.2531666666666668,
        "DistanceCAR": 23.549999999999997,
        "CarbonEmissionCARkg": 2.7788999999999997
      },
      {
        "StartStation": "Sengkang",
        "DistanceMRT": 16.5,
        "CarbonEmissionMRTkg": 0.2178,
        "DistanceBUS": 18.099999999999998,
        "CarbonEmissionBUSkg": 1.3212999999999997,
        "DistanceCAR": 16.299999999999997,
        "CarbonEmissionCARkg": 1.9233999999999996
      },
      {
        "StartStation": "Serangoon",
        "DistanceMRT": 6.3,
        "CarbonEmissionMRTkg": 0.08316,
        "DistanceBUS": 7.3,
        "CarbonEmissionBUSkg": 0.5328999999999999,
        "DistanceCAR": 7.550000000000001,
        "CarbonEmissionCARkg": 0.8909
      },
      {
        "StartStation": "Simei",
        "DistanceMRT": 19.5,
        "CarbonEmissionMRTkg": 0.2574,
        "DistanceBUS": 16.45,
        "CarbonEmissionBUSkg": 1.20085,
        "DistanceCAR": 16,
        "CarbonEmissionCARkg": 1.888
      },
      {
        "StartStation": "Sixth Avenue",
        "DistanceMRT": 6.4,
        "CarbonEmissionMRTkg": 0.08448,
        "DistanceBUS": 6.5,
        "CarbonEmissionBUSkg": 0.4745,
        "DistanceCAR": 7.199999999999999,
        "CarbonEmissionCARkg": 0.8495999999999999
      },
      {
        "StartStation": "Somerset",
        "DistanceMRT": 3.3,
        "CarbonEmissionMRTkg": 0.043559999999999995,
        "DistanceBUS": "N/A",
        "DistanceCAR": 4.3,
        "CarbonEmissionCARkg": 0.5074
      },
      {
        "StartStation": "Stadium",
        "DistanceMRT": 8.5,
        "CarbonEmissionMRTkg": 0.1122,
        "DistanceBUS": 8.3,
        "CarbonEmissionBUSkg": 0.6059,
        "DistanceCAR": 7.75,
        "CarbonEmissionCARkg": 0.9145
      },
      {
        "StartStation": "Stevens",
        "DistanceMRT": 3,
        "CarbonEmissionMRTkg": 0.039599999999999996,
        "DistanceBUS": 3.8499999999999996,
        "CarbonEmissionBUSkg": 0.28104999999999997,
        "DistanceCAR": 3.733333333333333,
        "CarbonEmissionCARkg": 0.4405333333333333
      },
      {
        "StartStation": "Tai Seng",
        "DistanceMRT": 8.9,
        "CarbonEmissionMRTkg": 0.11748,
        "DistanceBUS": 8.8,
        "CarbonEmissionBUSkg": 0.6424,
        "DistanceCAR": 7.949999999999999,
        "CarbonEmissionCARkg": 0.9380999999999998
      },
      {
        "StartStation": "Tampines",
        "DistanceMRT": 19.7,
        "CarbonEmissionMRTkg": 0.26004,
        "DistanceBUS": 16.05,
        "CarbonEmissionBUSkg": 1.17165,
        "DistanceCAR": 15.75,
        "CarbonEmissionCARkg": 1.8584999999999998
      },
      {
        "StartStation": "Tampines East",
        "DistanceMRT": 19.8,
        "CarbonEmissionMRTkg": 0.26136,
        "DistanceBUS": 17,
        "CarbonEmissionBUSkg": 1.2409999999999999,
        "DistanceCAR": 16.3,
        "CarbonEmissionCARkg": 1.9234
      },
      {
        "StartStation": "Tampines West",
        "DistanceMRT": 17.2,
        "CarbonEmissionMRTkg": 0.22704,
        "DistanceBUS": 14.75,
        "CarbonEmissionBUSkg": 1.0767499999999999,
        "DistanceCAR": 15.15,
        "CarbonEmissionCARkg": 1.7876999999999998
      },
      {
        "StartStation": "Tan Kah Kee",
        "DistanceMRT": 5.2,
        "CarbonEmissionMRTkg": 0.06864,
        "DistanceBUS": 5.2,
        "CarbonEmissionBUSkg": 0.3796,
        "DistanceCAR": 7,
        "CarbonEmissionCARkg": 0.826
      },
      {
        "StartStation": "Tanah Merah",
        "DistanceMRT": 16.9,
        "CarbonEmissionMRTkg": 0.22307999999999997,
        "DistanceBUS": 32.4,
        "CarbonEmissionBUSkg": 2.3651999999999997,
        "DistanceCAR": 15.95,
        "CarbonEmissionCARkg": 1.8820999999999999
      },
      {
        "StartStation": "Tanjong Pagar",
        "DistanceMRT": 7.9,
        "CarbonEmissionMRTkg": 0.10428,
        "DistanceBUS": 6.4,
        "CarbonEmissionBUSkg": 0.4672,
        "DistanceCAR": 7.2,
        "CarbonEmissionCARkg": 0.8496
      },
      {
        "StartStation": "Telok Ayer",
        "DistanceMRT": 6.9,
        "CarbonEmissionMRTkg": 0.09108000000000001,
        "DistanceBUS": 7.8,
        "CarbonEmissionBUSkg": 0.5693999999999999,
        "DistanceCAR": 6.8,
        "CarbonEmissionCARkg": 0.8023999999999999
      },
      {
        "StartStation": "Telok Blangah",
        "DistanceMRT": 15.15,
        "CarbonEmissionMRTkg": 0.19998,
        "DistanceBUS": 12.1,
        "CarbonEmissionBUSkg": 0.8833,
        "DistanceCAR": 11.85,
        "CarbonEmissionCARkg": 1.3982999999999999
      },
      {
        "StartStation": "Tiong Bahru",
        "DistanceMRT": 9.9,
        "CarbonEmissionMRTkg": 0.13068,
        "DistanceBUS": 6.699999999999999,
        "CarbonEmissionBUSkg": 0.4890999999999999,
        "DistanceCAR": 6.85,
        "CarbonEmissionCARkg": 0.8082999999999999
      },
      {
        "StartStation": "Toa Payoh",
        "DistanceMRT": 1.5,
        "CarbonEmissionMRTkg": 0.019799999999999998,
        "DistanceBUS": "N/A",
        "DistanceCAR": 2.4,
        "CarbonEmissionCARkg": 0.28319999999999995
      },
      {
        "StartStation": "Tuas Crescent",
        "DistanceMRT": 33.8,
        "CarbonEmissionMRTkg": 0.44615999999999995,
        "DistanceBUS": 31.7,
        "CarbonEmissionBUSkg": 2.3141,
        "DistanceCAR": 28.75,
        "CarbonEmissionCARkg": 3.3924999999999996
      },
      {
        "StartStation": "Tuas Link",
        "DistanceMRT": 36.6,
        "CarbonEmissionMRTkg": 0.48312,
        "DistanceBUS": 34.56666666666667,
        "CarbonEmissionBUSkg": 2.5233666666666665,
        "DistanceCAR": 30.7,
        "CarbonEmissionCARkg": 3.6226
      },
      {
        "StartStation": "Tuas West Road",
        "DistanceMRT": 35.2,
        "CarbonEmissionMRTkg": 0.46464000000000005,
        "DistanceBUS": 33.166666666666664,
        "CarbonEmissionBUSkg": 2.4211666666666662,
        "DistanceCAR": 30.5,
        "CarbonEmissionCARkg": 3.5989999999999998
      },
      {
        "StartStation": "Ubi",
        "DistanceMRT": 11.7,
        "CarbonEmissionMRTkg": 0.15444,
        "DistanceBUS": 10.3,
        "CarbonEmissionBUSkg": 0.7519,
        "DistanceCAR": 9.899999999999999,
        "CarbonEmissionCARkg": 1.1681999999999997
      },
      {
        "StartStation": "Upper Changi",
        "DistanceMRT": 21.5,
        "CarbonEmissionMRTkg": 0.2838,
        "DistanceBUS": 17.55,
        "CarbonEmissionBUSkg": 1.28115,
        "DistanceCAR": 16.5,
        "CarbonEmissionCARkg": 1.9469999999999998
      },
      {
        "StartStation": "Woodlands",
        "DistanceMRT": 20.8,
        "CarbonEmissionMRTkg": 0.27456,
        "DistanceBUS": 19.533333333333335,
        "CarbonEmissionBUSkg": 1.4259333333333333,
        "DistanceCAR": 20.8,
        "CarbonEmissionCARkg": 2.4544
      },
      {
        "StartStation": "Woodlands North",
        "DistanceMRT": 22.4,
        "CarbonEmissionMRTkg": 0.29568,
        "DistanceBUS": 26.2,
        "CarbonEmissionBUSkg": 1.9125999999999999,
        "DistanceCAR": 23.1,
        "CarbonEmissionCARkg": 2.7258
      },
      {
        "StartStation": "Woodlands South",
        "DistanceMRT": 22.2,
        "CarbonEmissionMRTkg": 0.29303999999999997,
        "DistanceBUS": 18.233333333333334,
        "CarbonEmissionBUSkg": 1.3310333333333333,
        "DistanceCAR": 20.6,
        "CarbonEmissionCARkg": 2.4308
      },
      {
        "StartStation": "Woodleigh",
        "DistanceMRT": 7.55,
        "CarbonEmissionMRTkg": 0.09966,
        "DistanceBUS": 7.15,
        "CarbonEmissionBUSkg": 0.52195,
        "DistanceCAR": 5.566666666666666,
        "CarbonEmissionCARkg": 0.6568666666666666
      },
      {
        "StartStation": "Yew Tee",
        "DistanceMRT": 28.1,
        "CarbonEmissionMRTkg": 0.37092,
        "DistanceBUS": 24.35,
        "CarbonEmissionBUSkg": 1.77755,
        "DistanceCAR": 17.3,
        "CarbonEmissionCARkg": 2.0414
      },
      {
        "StartStation": "Yio Chu Kang",
        "DistanceMRT": 7.4,
        "CarbonEmissionMRTkg": 0.09768,
        "DistanceBUS": 10.233333333333334,
        "CarbonEmissionBUSkg": 0.7470333333333333,
        "DistanceCAR": 9.2,
        "CarbonEmissionCARkg": 1.0856
      },
      {
        "StartStation": "Yishun",
        "DistanceMRT": 13.6,
        "CarbonEmissionMRTkg": 0.17951999999999999,
        "DistanceBUS": 15.4,
        "CarbonEmissionBUSkg": 1.1241999999999999,
        "DistanceCAR": 19.35,
        "CarbonEmissionCARkg": 2.2833
      }];


  carbonFootPrintValue: any;



  // selectB_Data =[
  //   {
  //    "StartStation": "Aljunied",
  //    "DistanceMRT": 9.8
  //   },
  //   {
  //    "StartStation": "Ang Mo Kio",
  //    "DistanceMRT": 5.9
  //   },
  //   {
  //    "StartStation": "Bartley",
  //    "DistanceMRT": 7.6
  //   },
  //   {
  //    "StartStation": "Bayfront",
  //    "DistanceMRT": 7.25
  //   },
  //   {
  //    "StartStation": "Beauty World",
  //    "DistanceMRT": 9.2
  //   },
  //   {
  //    "StartStation": "Bedok",
  //    "DistanceMRT": 15.1
  //   },
  //   {
  //    "StartStation": "Bedok North",
  //    "DistanceMRT": 14.8
  //   },
  //   {
  //    "StartStation": "Bedok Reservoir",
  //    "DistanceMRT": 15.6
  //   },
  //   {
  //    "StartStation": "Bencoolen",
  //    "DistanceMRT": 3.1
  //   },
  //   {
  //    "StartStation": "Bendemeer",
  //    "DistanceMRT": 6.9
  //   },
  //   {
  //    "StartStation": "Bishan",
  //    "DistanceMRT": 3.5
  //   },
  //   {
  //    "StartStation": "Boon Keng",
  //    "DistanceMRT": 7.2
  //   },
  //   {
  //    "StartStation": "Boon Lay",
  //    "DistanceMRT": 26.1
  //   },
  //   {
  //    "StartStation": "Botanic Gardens",
  //    "DistanceMRT": 4
  //   },
  //   {
  //    "StartStation": "Braddell",
  //    "DistanceMRT": 2.4
  //   },
  //   {
  //    "StartStation": "Bras Basah",
  //    "DistanceMRT": 4.7
  //   },
  //   {
  //    "StartStation": "Buangkok",
  //    "DistanceMRT": 13.35
  //   },
  //   {
  //    "StartStation": "Bugis",
  //    "DistanceMRT": 6.2
  //   },
  //   {
  //    "StartStation": "Bukit Batok",
  //    "DistanceMRT": 34
  //   },
  //   {
  //    "StartStation": "Bukit Gombak",
  //    "DistanceMRT": 32.8
  //   },
  //   {
  //    "StartStation": "Bukit Panjang",
  //    "DistanceMRT": 13.850000000000001
  //   },
  //   {
  //    "StartStation": "Buona Vista",
  //    "DistanceMRT": 14.9
  //   },
  //   {
  //    "StartStation": "Caldecott",
  //    "DistanceMRT": 3.3
  //   },
  //   {
  //    "StartStation": "Canberra",
  //    "DistanceMRT": 15.3
  //   },
  //   {
  //    "StartStation": "Cashew",
  //    "DistanceMRT": 12.8
  //   },
  //   {
  //    "StartStation": "Changi Airport",
  //    "DistanceMRT": 23.4
  //   },
  //   {
  //    "StartStation": "Chinatown",
  //    "DistanceMRT": 6.3
  //   },
  //   {
  //    "StartStation": "Chinese Garden",
  //    "DistanceMRT": 23
  //   },
  //   {
  //    "StartStation": "Choa Chu Kang",
  //    "DistanceMRT": 29.5
  //   },
  //   {
  //    "StartStation": "City Hall",
  //    "DistanceMRT": 5.2
  //   },
  //   {
  //    "StartStation": "Clarke Quay",
  //    "DistanceMRT": 5.95
  //   },
  //   {
  //    "StartStation": "Clementi",
  //    "DistanceMRT": 17.9
  //   },
  //   {
  //    "StartStation": "Commonwealth",
  //    "DistanceMRT": 13.8
  //   },
  //   {
  //    "StartStation": "Dakota",
  //    "DistanceMRT": 10.1
  //   },
  //   {
  //    "StartStation": "Dhoby Ghaut",
  //    "DistanceMRT": 4.1
  //   },
  //   {
  //    "StartStation": "Dover",
  //    "DistanceMRT": 16.3
  //   },
  //   {
  //    "StartStation": "Downtown",
  //    "DistanceMRT": 7.6
  //   },
  //   {
  //    "StartStation": "Esplanade",
  //    "DistanceMRT": 5.5
  //   },
  //   {
  //    "StartStation": "Eunos",
  //    "DistanceMRT": 12
  //   },
  //   {
  //    "StartStation": "Expo",
  //    "DistanceMRT": 21.1
  //   },
  //   {
  //    "StartStation": "Farrer Park",
  //    "DistanceMRT": 6.1
  //   },
  //   {
  //    "StartStation": "Farrer Road",
  //    "DistanceMRT": 7.4
  //   },
  //   {
  //    "StartStation": "Fort Canning",
  //    "DistanceMRT": 7.25
  //   },
  //   {
  //    "StartStation": "Geylang Bahru",
  //    "DistanceMRT": 8.3
  //   },
  //   {
  //    "StartStation": "Gul Circle",
  //    "DistanceMRT": 32.1
  //   },
  //   {
  //    "StartStation": "HarbourFront",
  //    "DistanceMRT": 9.6
  //   },
  //   {
  //    "StartStation": "Haw Par Villa",
  //    "DistanceMRT": 16.5
  //   },
  //   {
  //    "StartStation": "Hillview",
  //    "DistanceMRT": 11.95
  //   },
  //   {
  //    "StartStation": "Holland Village",
  //    "DistanceMRT": 6.6
  //   },
  //   {
  //    "StartStation": "Hougang",
  //    "DistanceMRT": 14.2
  //   },
  //   {
  //    "StartStation": "Jalan Besar",
  //    "DistanceMRT": 3.7
  //   },
  //   {
  //    "StartStation": "Joo Koon",
  //    "DistanceMRT": 29.8
  //   },
  //   {
  //    "StartStation": "Jurong East",
  //    "DistanceMRT": 28.8
  //   },
  //   {
  //    "StartStation": "Jurong East",
  //    "DistanceMRT": 28.8
  //   },
  //   {
  //    "StartStation": "Kaki Bukit",
  //    "DistanceMRT": 12.8
  //   },
  //   {
  //    "StartStation": "Kallang",
  //    "DistanceMRT": 8.3
  //   },
  //   {
  //    "StartStation": "Kembangan",
  //    "DistanceMRT": 13.1
  //   },
  //   {
  //    "StartStation": "Kent Ridge",
  //    "DistanceMRT": 15.1
  //   },
  //   {
  //    "StartStation": "Khatib",
  //    "DistanceMRT": 12.3
  //   },
  //   {
  //    "StartStation": "King Albert Park",
  //    "DistanceMRT": 8.1
  //   },
  //   {
  //    "StartStation": "Kovan",
  //    "DistanceMRT": 10.5
  //   },
  //   {
  //    "StartStation": "Kranji",
  //    "DistanceMRT": 24
  //   },
  //   {
  //    "StartStation": "Labrador Park",
  //    "DistanceMRT": 15.5
  //   },
  //   {
  //    "StartStation": "Lakeside",
  //    "DistanceMRT": 24.4
  //   },
  //   {
  //    "StartStation": "Lavender",
  //    "DistanceMRT": 7.3
  //   },
  //   {
  //    "StartStation": "Little India",
  //    "DistanceMRT": 3
  //   },
  //   {
  //    "StartStation": "Lorong Chuan",
  //    "DistanceMRT": 5.4
  //   },
  //   {
  //    "StartStation": "MacPherson",
  //    "DistanceMRT": 10
  //   },
  //   {
  //    "StartStation": "Marina Bay",
  //    "DistanceMRT": 7.2
  //   },
  //   {
  //    "StartStation": "Marina South Pier",
  //    "DistanceMRT": 8.6
  //   },
  //   {
  //    "StartStation": "Marsiling",
  //    "DistanceMRT": 22.3
  //   },
  //   {
  //    "StartStation": "Marymount",
  //    "DistanceMRT": 5.1
  //   },
  //   {
  //    "StartStation": "Mattar",
  //    "DistanceMRT": 9.8
  //   },
  //   {
  //    "StartStation": "Mountbatten",
  //    "DistanceMRT": 9.3
  //   },
  //   {
  //    "StartStation": "Newton",
  //    "DistanceMRT": 1.2
  //   },
  //   {
  //    "StartStation": "Nicoll Highway",
  //    "DistanceMRT": 7.1
  //   },
  //   {
  //    "StartStation": "Novena",
  //    "DistanceMRT": 0
  //   },
  //   {
  //    "StartStation": "One-North",
  //    "DistanceMRT": 15.100000000000001
  //   },
  //   {
  //    "StartStation": "Orchard",
  //    "DistanceMRT": 2.7
  //   },
  //   {
  //    "StartStation": "Outram Park",
  //    "DistanceMRT": 7.8
  //   },
  //   {
  //    "StartStation": "Pasir Panjang",
  //    "DistanceMRT": 17.8
  //   },
  //   {
  //    "StartStation": "Pasir Ris",
  //    "DistanceMRT": 23.3
  //   },
  //   {
  //    "StartStation": "Paya Lebar",
  //    "DistanceMRT": 11.100000000000001
  //   },
  //   {
  //    "StartStation": "Pioneer",
  //    "DistanceMRT": 27.1
  //   },
  //   {
  //    "StartStation": "Potong Pasir",
  //    "DistanceMRT": 8.8
  //   },
  //   {
  //    "StartStation": "Promenade",
  //    "DistanceMRT": 6.4
  //   },
  //   {
  //    "StartStation": "Punggol",
  //    "DistanceMRT": 18.1
  //   },
  //   {
  //    "StartStation": "Queenstown",
  //    "DistanceMRT": 12.6
  //   },
  //   {
  //    "StartStation": "Raffles Place",
  //    "DistanceMRT": 6.2
  //   },
  //   {
  //    "StartStation": "Redhill",
  //    "DistanceMRT": 11.2
  //   },
  //   {
  //    "StartStation": "Rochor",
  //    "DistanceMRT": 3.3
  //   },
  //   {
  //    "StartStation": "Sembawang",
  //    "DistanceMRT": 16.7
  //   },
  //   {
  //    "StartStation": "Sengkang",
  //    "DistanceMRT": 16.5
  //   },
  //   {
  //    "StartStation": "Serangoon",
  //    "DistanceMRT": 6.3
  //   },
  //   {
  //    "StartStation": "Simei",
  //    "DistanceMRT": 19.5
  //   },
  //   {
  //    "StartStation": "Sixth Avenue",
  //    "DistanceMRT": 6.4
  //   },
  //   {
  //    "StartStation": "Somerset",
  //    "DistanceMRT": 3.3
  //   },
  //   {
  //    "StartStation": "Stadium",
  //    "DistanceMRT": 8.5
  //   },
  //   {
  //    "StartStation": "Stevens",
  //    "DistanceMRT": 3
  //   },
  //   {
  //    "StartStation": "Tai Seng",
  //    "DistanceMRT": 8.9
  //   },
  //   {
  //    "StartStation": "Tampines",
  //    "DistanceMRT": 19.7
  //   },
  //   {
  //    "StartStation": "Tampines East",
  //    "DistanceMRT": 19.8
  //   },
  //   {
  //    "StartStation": "Tampines West",
  //    "DistanceMRT": 17.2
  //   },
  //   {
  //    "StartStation": "Tan Kah Kee",
  //    "DistanceMRT": 5.2
  //   },
  //   {
  //    "StartStation": "Tanah Merah",
  //    "DistanceMRT": 16.9
  //   },
  //   {
  //    "StartStation": "Tanjong Pagar",
  //    "DistanceMRT": 7.9
  //   },
  //   {
  //    "StartStation": "Telok Ayer",
  //    "DistanceMRT": 6.9
  //   },
  //   {
  //    "StartStation": "Telok Blangah",
  //    "DistanceMRT": 15.15
  //   },
  //   {
  //    "StartStation": "Tiong Bahru",
  //    "DistanceMRT": 9.9
  //   },
  //   {
  //    "StartStation": "Toa Payoh",
  //    "DistanceMRT": 1.5
  //   },
  //   {
  //    "StartStation": "Tuas Crescent",
  //    "DistanceMRT": 33.8
  //   },
  //   {
  //    "StartStation": "Tuas Link",
  //    "DistanceMRT": 36.6
  //   },
  //   {
  //    "StartStation": "Tuas West Road",
  //    "DistanceMRT": 35.2
  //   },
  //   {
  //    "StartStation": "Ubi",
  //    "DistanceMRT": 11.7
  //   },
  //   {
  //    "StartStation": "Upper Changi",
  //    "DistanceMRT": 21.5
  //   },
  //   {
  //    "StartStation": "Woodlands",
  //    "DistanceMRT": 20.8
  //   },
  //   {
  //    "StartStation": "Woodlands North",
  //    "DistanceMRT": 22.4
  //   },
  //   {
  //    "StartStation": "Woodlands South",
  //    "DistanceMRT": 22.2
  //   },
  //   {
  //    "StartStation": "Woodleigh",
  //    "DistanceMRT": 7.55
  //   },
  //   {
  //    "StartStation": "Yew Tee",
  //    "DistanceMRT": 28.1
  //   },
  //   {
  //    "StartStation": "Yio Chu Kang",
  //    "DistanceMRT": 7.4
  //   },
  //   {
  //    "StartStation": "Yishun",
  //    "DistanceMRT": 13.6
  // }];



  constructor(private router: Router, private checkStr: StorageService) { }


  // ionViewDidEnter(){
  //   this.selectB_Data = this.locations.data;
  //   this.filterData = this.selectB_Data;
  // }
  


  getAccordion_value(ev){
    if(this.first != undefined && this.second != undefined) {

      const data = this.second.split('/');

      let StartStation = data[0];
      let DistanceMRT =  data[1];
      let CarbonEmissionMRTkg =  data[2];
      let DistanceBUS =  data[3];
      let CarbonEmissionBUSkg =  data[4];
      let DistanceCAR =  data[5];
      let CarbonEmissionCARkg =  data[6];

      if(this.first == 'bus'){
        this.carbonFootPrintValue = CarbonEmissionBUSkg;
      }else if(this.first == 'car'){
        this.carbonFootPrintValue = CarbonEmissionCARkg;
      }else if(this.first == 'mrt'){
        this.carbonFootPrintValue = CarbonEmissionMRTkg;
      }else if(this.first == 'bicycle'){
        this.carbonFootPrintValue = '0.00';
      }else if(this.first == 'other'){
        this.carbonFootPrintValue = '0.00';
      }

      this.checkStr.setStore('carbon_footprint', {status: 'set', value: this.carbonFootPrintValue});
      this.router.navigate(['/main/tabs/tab3']);
    }else{
      // this.checkStr.prToast('Please select both option!');
    }
  }


  ngOnInit() {
  }

}
