import React, { useState, useEffect, useContext } from 'react';
import helpers from '../../helpers';
import apiInstance from '../../services/apiServices';
import Loader from 'react-loader-spinner';
import { UserContext } from '../../contexts/UserContext';
import AppContext from '../../contexts/AppContext';
import Wizard from '../configuration/Wizard';
import CryptoJS from 'crypto-js';
import { encryptKeys, encryptSaltKey } from './crypt';
import { useIntl } from 'react-intl'

function Config(props) {
  const intl = useIntl();
  const wizardData = [
    {
      id: 0,
      label: intl.formatMessage({ id: 'googleApi' }),
      icon: 'fa fa-google',
      filterArray: ['google_map_api_key', 'google_login_auth_token'],
    },
    {
      id: 1,
      label: intl.formatMessage({ id: 'webDefaults' }),
      icon: 'fa fa-globe',
      filterArray: [
        'web',
        'email',
        'bgSong',
        'bgSongDefaultPlay',
        'switchSongFeatureRequired',
        'bgVideo',
        'bgVideoDefaultPlay',
        'switchVideoFeatureRequired',
        'bannerImg',
        'logoImg',
        'favIconImg',
        'webLayoutType',
        'webMenuType',
        'webTheme',
        'switchThemeFeatureRequired',
        'webThemeColor',
        'webThemeBackground',
      ],
    },
    {
      id: 2,
      label: intl.formatMessage({ id: 'AWSS3' }),
      icon: 'fa fa-amazon',
      filterArray: [
        'aws_s3_access_key_id',
        'aws_s3_secret_access_key',
        'aws_s3_bucket',
        'aws_s3_region',
      ],
    },
    {
      id: 3,
      label: intl.formatMessage({ id: 'socialMedia' }),
      icon: 'fa fa-share-square',
      filterArray: [
        'social_media_facebook',
        'social_media_twitter',
        'social_media_linkedIn',
        'social_media_instagram',
        'switchSocialMediaFeatureRequired',
      ],
    },
  ];
  const masterConfig = [
    {
      id: 'config_id',
      index: 'config_id',
      elementType: 'hidden',
      value: '',
      className: '',
    },
    {
      id: 'web',
      index: 'web',
      label: intl.formatMessage({ id: 'website' }),
      elementType: 'text',
      value: '',
      placeHolder: 'johndoe.com',
      className: 'col-md-4 col-sm-6',
      options: {
        required: true,
        validation: /([^\s])/,
        errorMsg: intl.formatMessage({ id: 'enterValidWebsite' }),
        help: [
          intl.formatMessage({ id: 'yourWebDomain' }),
          intl.formatMessage({ id: 'thisValueWillBeSetToYourGlobalVariables' })
        ],
      },
    },
    {
      id: 'email',
      index: 'email',
      label: intl.formatMessage({ id: 'email' }),
      elementType: 'text',
      value: '',
      placeHolder: 'support@johndoe.com',
      className: 'col-md-4 col-sm-6',
      options: {
        required: true,
        validation: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/,
        errorMsg: intl.formatMessage({ id: 'enterValidEmail' }),
        help: [
          intl.formatMessage({ id: 'yourPersonalOrCompanyMailId' }),
          intl.formatMessage({ id: 'thisValueWillBeSetToYourGlobalVariables' })
        ],
      },
    },
    {
      id: 'google_map_api_key',
      index: 'google_map_api_key',
      label: intl.formatMessage({ id: 'googleMapApiKey' }),
      elementType: 'textArea',
      value: '',
      placeHolder: 'xxYYzz',
      className: 'col-md-4 col-sm-6',
      options: {
        required: true,
        validation: /([^\s])/,
        errorMsg: intl.formatMessage({ id: 'thisFieldIsRequired' }),
        help: [
          intl.formatMessage({ id: 'howToGetThem' }),
          intl.formatMessage({ id: 'goTo' }, { link: "https://console.cloud.google.com/" }),
          intl.formatMessage({ id: 'scrollAndClickGoogleMapsPlatform' }),
          intl.formatMessage({ id: 'clickValue' }, { value: "Credentials" }),
          intl.formatMessage({ id: 'ClickValueAtTheTopCenter' }, { value: "+Create Credentials" }),
          intl.formatMessage({ id: 'ClickValueAtTheTopCenter' }, { value: "API Key" }),
          intl.formatMessage({ id: 'copyTheGeneratedKey' }),
          intl.formatMessage({ id: 'pasteHereAndSave' }),
          intl.formatMessage({ id: 'youAreDoneGoogleMaps' }),
        ],
      },
    },
    {
      id: 'google_login_auth_token',
      index: 'google_login_auth_token',
      label: intl.formatMessage({ id: 'googleLoginAuthToken' }),
      elementType: 'textArea',
      value: '',
      placeHolder: 'xxYYzz',
      className: 'col-md-4 col-sm-6',
      options: {
        required: true,
        validation: /([^\s])/,
        rowLength: 100,
        errorMsg: intl.formatMessage({ id: 'thisFieldIsRequired' }),
        help: [
          intl.formatMessage({ id: 'howToGetThem' }),
          intl.formatMessage({ id: 'goTo' }, { link: "https://console.cloud.google.com/" }),
          intl.formatMessage({ id: 'clickValue' }, { value: "API Services" }),
          intl.formatMessage({ id: 'clickValue' }, { value: "Credentials" }),
          intl.formatMessage({ id: 'ClickValueAtTheTopCenter' }, { value: "+Create Credentials" }),
          intl.formatMessage({ id: 'clickValue' }, { value: "Oauth Client Id" }),
          intl.formatMessage({ id: 'selectWebApplicationGiveaSuitableName' }),
          intl.formatMessage({ id: 'clickValue' }, { value: "Add URI" }),
          intl.formatMessage({ id: 'typeYourDomainUrl' }),
          intl.formatMessage({ id: 'clickValue' }, { value: "Create" }),
          intl.formatMessage({ id: 'copyValue' }, { value: "Client ID" }),
          intl.formatMessage({ id: 'pasteHere' }),
          intl.formatMessage({ id: 'youAreDone' }),
          intl.formatMessage({ id: 'nowYouAllowPublicToLoginViaGoogleLogin' }),
        ],
      },
    },
    {
      id: 'bgSong',
      index: 'bgSong',
      label: intl.formatMessage({ id: 'themeBackgroundMusic' }),
      elementType: 'textArea',
      value: '',
      placeHolder: 'https://mysong.mp3',
      className: 'col-md-4 col-sm-6',
      options: {
        required: true,
        validation: /([^\s])/,
        rowLength: 100,
        errorMsg: 'Audio file name required',
        help: [
          `Choose your theme song playable for people`,
          `If not required, leave a slash(/)`,
          `If required, Paste it from AWS gallery (copy to clipboard button), where your media files are located`,
          `Note: Supports only AWS objects. Other sources not allowed.`,
        ],
      },
    },
    {
      id: 'bgSongDefaultPlay',
      index: 'bgSongDefaultPlay',
      label: intl.formatMessage({ id: 'themeMusicDefaultPlay' }),
      elementType: 'dropDown',
      value: '',
      placeHolder: 'Select',
      list: [
        { label: 'True', value: 1 },
        { label: 'False', value: 0 },
      ],
      className: 'col-md-4 col-sm-6',
      options: {
        required: true,
        validation: /([^\s])/,
        errorMsg: 'This field is required',
        help: [
          `Theme Background Music will be played or not played during start up`,
          `If required, Paste it from AWS gallery (copy to clipboard button), where your media files are located`,
          `Note: Supports only AWS objects. Other sources not allowed.`,
        ],
      },
    },
    {
      id: 'switchSongFeatureRequired',
      index: 'switchSongFeatureRequired',
      label: intl.formatMessage({ id: 'requireBackgroundSongSwitch' }),
      elementType: 'dropDown',
      value: '',
      placeHolder: 'Select',
      className: 'col-md-4 col-sm-6',
      list: [
        { label: 'Yes', value: '1' },
        { label: 'No', value: '0' },
      ],
      options: {
        required: true,
        validation: /([^\s])/,
        errorMsg: 'This field is required',
        help: [
          `You can show or hide audio control switch to users from the global menu`,
          `This feature can be enabled or disabled basesd on your selection`,
        ],
      },
    },
    {
      id: 'bgVideo',
      index: 'bgVideo',
      label: intl.formatMessage({ id: 'themeBackgroundVideo' }),
      elementType: 'textArea',
      value: '',
      placeHolder: 'https://my-video.mp4',
      className: 'col-md-4 col-sm-6',
      options: {
        required: true,
        validation: /([^\s])/,
        rowLength: 100,
        errorMsg: 'Video file name required',
        help: [
          `Choose your theme video which plays in background`,
          `Dont worry.. It will be muted`,
          `Keep a small video. Check file size not exceeds 5MB`,
          `Paste it from AWS gallery (copy to clipboard button), where your media files are located`,
          `Note: Supports only AWS objects. Other sources not allowed.`,
        ],
      },
    },
    {
      id: 'bgVideoDefaultPlay',
      index: 'bgVideoDefaultPlay',
      label: intl.formatMessage({ id: 'themeVideoDefaultPlay' }),
      elementType: 'dropDown',
      value: '',
      placeHolder: 'Select',
      list: [
        { label: 'True', value: 1 },
        { label: 'False', value: 0 },
      ],
      className: 'col-md-4 col-sm-6',
      options: {
        required: true,
        validation: /([^\s])/,
        errorMsg: 'This field is required',
        help: [`Theme Background Video will be played or not played on start up`],
      },
    },
    {
      id: 'switchVideoFeatureRequired',
      index: 'switchVideoFeatureRequired',
      label: intl.formatMessage({ id: 'requireBackgroundVideoSwitch' }),
      elementType: 'dropDown',
      value: '',
      placeHolder: 'Select',
      className: 'col-md-4 col-sm-6',
      list: [
        { label: 'Yes', value: '1' },
        { label: 'No', value: '0' },
      ],
      options: {
        required: true,
        validation: /([^\s])/,
        errorMsg: 'This field is required',
        help: [
          `You can show or hide video control switch to users from the global menu`,
          `This feature can be enabled or disabled basesd on your selection`,
        ],
      },
    },
    {
      id: 'bannerImg',
      index: 'bannerImg',
      label: intl.formatMessage({ id: 'logoImage' }),
      elementType: 'textArea',
      value: '',
      placeHolder: 'https://my-banner-img.svg',
      className: 'col-md-4 col-sm-6',
      options: {
        required: true,
        validation: /([^\s])/,
        rowLength: 100,
        errorMsg: 'Image name required',
        help: [
          `Set your logo image`,
          `PNG or SVG type is recommended`,
          `200 X 40 dimension required`,
          `Paste it from AWS gallery (copy to clipboard button), where your media files are located`,
          `This will be available in top global header`,
          `Note: Supports only AWS objects. Other sources not allowed.`,
        ],
      },
    },
    {
      id: 'logoImg',
      index: 'logoImg',
      label: intl.formatMessage({ id: 'logoIcon' }),
      elementType: 'textArea',
      value: '',
      placeHolder: 'https://my-logo.svg',
      className: 'col-md-4 col-sm-6',
      options: {
        required: true,
        validation: /([^\s])/,
        rowLength: 100,
        errorMsg: 'File name required',
        help: [
          `Set your logo icon`,
          `PNG or SVG type is recommended`,
          `Paste it from AWS gallery (copy to clipboard button), where your media files are located`,
          `Note: Supports only AWS objects. Other sources not allowed.`,
        ],
      },
    },
    {
      id: 'favIconImg',
      index: 'favIconImg',
      label: intl.formatMessage({ id: 'faviconImage' }),
      elementType: 'textArea',
      value: '',
      placeHolder: 'https://my-favicon.icon',
      className: 'col-md-4 col-sm-6',
      options: {
        required: true,
        validation: /$/,
        rowLength: 100,
        errorMsg: 'File name required',
        help: [
          `Set your favicon. Usually it shud be your logo`,
          `32X32 or 64X64 size is sufficient`,
          `Paste it from AWS gallery (copy to clipboard button), where your media files are located`,
          `Note: Supports only AWS objects. Other sources not allowed.`,
        ],
      },
    },
    {
      id: 'webLayoutType',
      index: 'webLayoutType',
      label: intl.formatMessage({ id: 'WebLayoutType' }),
      elementType: 'dropDown',
      value: '',
      placeHolder: 'Select',
      className: 'col-md-4 col-sm-6',
      list: [
        { label: 'Default', value: 'default' },
        { label: 'Classic', value: 'classic' },
      ],
      options: {
        required: true,
        validation: /([^\s])/,
        errorMsg: 'This field is required',
        help: [
          `This setup is only for large displays`,
          `Default: Occupies entire width of screen`,
          `Classic: Occupiess 70% width in screen middle`,
        ],
      },
    },
    {
      id: 'webMenuType',
      index: 'webMenuType',
      label: intl.formatMessage({ id: 'WebMenuType' }),
      elementType: 'dropDown',
      value: '',
      placeHolder: 'Select',
      className: 'col-md-4 col-sm-6',
      list: [
        { label: 'Top', value: 'topMenu' },
        { label: 'Left', value: 'sideMenuLeft' },
        { label: 'Right', value: 'sideMenuRight' },
      ],
      options: {
        required: true,
        validation: /([^\s])/,
        errorMsg: 'This field is required',
        help: [`Where you want to place your menu?`, `Top, Left or Right`],
      },
    },
    {
      id: 'webTheme',
      index: 'webTheme',
      label: intl.formatMessage({ id: 'webTheme' }),
      elementType: 'dropDown',
      value: '',
      placeHolder: 'Select',
      className: 'col-md-4 col-sm-6',
      list: [
        { label: 'Dark', value: 'dark' },
        { label: 'Light', value: 'light' },
      ],
      options: {
        required: true,
        validation: /([^\s])/,
        errorMsg: 'This field is required',
        help: [`How does your website look on start up?`, `Dark or Light`],
      },
    },
    {
      id: 'switchThemeFeatureRequired',
      index: 'switchThemeFeatureRequired',
      label: intl.formatMessage({ id: 'switchThemeFeatureRequired' }),
      elementType: 'dropDown',
      value: '',
      placeHolder: 'Select',
      className: 'col-md-4 col-sm-6',
      list: [
        { label: 'Yes', value: '1' },
        { label: 'No', value: '0' },
      ],
      options: {
        required: true,
        validation: /([^\s])/,
        errorMsg: 'This field is required',
        help: [
          `You can show or hide theme buttons to users from the global menu`,
          `This feature can be enabled or disabled basesd on your selection`,
        ],
      },
    },
    {
      id: 'webThemeColor',
      index: 'webThemeColor',
      label: intl.formatMessage({ id: 'webThemeColor' }),
      elementType: 'text',
      value: '',
      placeHolder: '#000000',
      className: 'col-md-4 col-sm-6',
      options: {
        required: true,
        validation: /([^\s])/,
        errorMsg: 'A valid color is required',
        help: [
          `Your application text color`,
          `Usualy its #000000 (black)`,
          `This decides the look and feel of your application, unless you use these color variables`,
        ],
      },
    },
    {
      id: 'webThemeBackground',
      index: 'webThemeBackground',
      label: intl.formatMessage({ id: 'webThemeBackgroundColor' }),
      elementType: 'text',
      value: '',
      placeHolder: '#c2d82e',
      className: 'col-md-4 col-sm-6',
      options: {
        required: true,
        validation: /([^\s])/,
        errorMsg: 'A valid color is required',
        help: [
          `Your application back ground color`,
          `It should be a light color, say #ffffff (white)`,
          `This decides the look and feel of your application, unless you use these color variables`,
        ],
      },
    },
    {
      id: 'aws_s3_access_key_id',
      index: 'aws_s3_access_key_id',
      label: intl.formatMessage({ id: 'awsS3AccessKeyId' }),
      elementType: 'textArea',
      value: '',
      placeHolder: 'XXXyyyZZZ',
      className: 'col-md-4 col-sm-6',
      options: {
        required: true,
        validation: /([^\s])/,
        rowLength: 100,
        errorMsg: 'Access key id is required',
        help: [
          `How to get them?`,
          `Hope you have created an AWS S3 account`,
          `Follow these steps in https://s3.console.aws.amazon.com/`,
          `You'll see this key while adding user in create user section`,
          `You need to copy, paste it in your backup during user credentials. Else you cant retrieve`,
          `This configuration is important to maintain your images and other files`,
          `Important: You should set "AdministratorAccess" in permissions (Attach existing policies directly), else the AWS gallery module wont work`,
        ],
      },
    },
    {
      id: 'aws_s3_secret_access_key',
      index: 'aws_s3_secret_access_key',
      label: intl.formatMessage({ id: 'awsS3SecretAccessKey' }),
      elementType: 'textArea',
      value: '',
      placeHolder: 'XXXyyyZZZ',
      className: 'col-md-4 col-sm-6',
      options: {
        required: true,
        validation: /([^\s])/,
        rowLength: 100,
        errorMsg: 'Secret Access key is required',
        help: [`Follow the same steps described in AWS S3 Access Key ID`],
      },
    },
    {
      id: 'aws_s3_bucket',
      index: 'aws_s3_bucket',
      label: intl.formatMessage({ id: 'awsS3BucketName' }),
      elementType: 'text',
      value: '',
      placeHolder: 'My-S3-Bucket',
      className: 'col-md-4 col-sm-6',
      options: {
        required: true,
        validation: /([^\s])/,
        errorMsg: 'Bucket name is required',
        help: [
          `How to get them?`,
          `Hope you have created an AWS S3 account`,
          `Follow these steps in https://s3.console.aws.amazon.com/`,
          `Create bucket name in Buckets section`,
          `Once created, click the bucket name`,
          `Go to Permissions tab`,
          `Check "Block public access" is On`,
          `Goto "Bucket policy", Edit and replace the below code with your credentials`,
          `{
            "Version": "2012-10-17",
            "Statement": [
              {
                "Sid": "Statement1",
                "Effect": "Allow",
                "Principal": {
                  "AWS": "arn:aws:iam::12345678:user/xxxyyyzzz"
                },
                "Action": [
                  "s3:PutObject",
                  "s3:PutObjectAcl",
                  "s3:DeleteObject"
                ],
                "Resource": "arn:aws:s3:::yourbucketname/*"
              }
            ]
          }`,
          `Go to Cross-origin resource sharing (CORS)`,
          `Edit and replace the below code with your credentials`,
          `[
            {
              "AllowedHeaders": [
                "*"
              ],
              "AllowedMethods": [
                "GET",
                "PUT",
                "POST",
                "DELETE"
              ],
              "AllowedOrigins": [
                "https://yourwebsite.com"
              ],
              "ExposeHeaders": [
                "ETag"
              ]
            }
          ]`,
          `You are done. Enjoy AWS S3.`,
        ],
      },
    },
    {
      id: 'aws_s3_region',
      index: 'aws_s3_region',
      label: intl.formatMessage({ id: 'awsS3RegionName' }),
      elementType: 'text',
      value: '',
      placeHolder: 'xx-south-yy',
      className: 'col-md-4 col-sm-6',
      options: {
        required: true,
        validation: /([^\s])/,
        errorMsg: 'Region name is required',
        help: [
          `How to get them?`,
          `Hope you have created an AWS S3 account`,
          `The region name that you've selected in creating bucket section`,
          `This helps to fetch files from your nearest AWS sever region`,
          `This configuration is important to maintain your images and other files`,
        ],
      },
    },
    {
      id: 'social_media_facebook',
      index: 'social_media_facebook',
      label: intl.formatMessage({ id: 'facebook' }),
      elementType: 'textArea',
      value: '',
      placeHolder: 'https://facebook.com/xyz',
      className: 'col-md-4 col-sm-6',
      options: {
        validation: /$/,
        rowLength: 100,
        errorMsg: 'Facebook profile name is required',
        help: [`Individual or company facebook profile`],
      },
    },
    {
      id: 'social_media_twitter',
      index: 'social_media_twitter',
      label: intl.formatMessage({ id: 'twitter' }),
      elementType: 'textArea',
      value: '',
      placeHolder: 'https://twitter.com/xyz',
      className: 'col-md-4 col-sm-6',
      options: {
        validation: /$/,
        rowLength: 100,
        errorMsg: 'Twitter profile name is required',
        help: [`Individual or company twitter profile`],
      },
    },
    {
      id: 'social_media_linkedIn',
      index: 'social_media_linkedIn',
      label: intl.formatMessage({ id: 'linkedIn' }),
      elementType: 'textArea',
      value: '',
      placeHolder: 'https://linkedIn.com/xyz',
      className: 'col-md-4 col-sm-6',
      options: {
        validation: /$/,
        rowLength: 100,
        errorMsg: 'LinkedIn profile name is required',
        help: [`Individual or company LinkedId profile`],
      },
    },
    {
      id: 'social_media_instagram',
      index: 'social_media_instagram',
      label: '',
      elementType: 'textArea',
      label: intl.formatMessage({ id: 'instagram' }),
      placeHolder: 'https://instagram.com/xyz',
      className: 'col-md-4 col-sm-6',
      options: {
        validation: /$/,
        rowLength: 100,
        errorMsg: 'Instagram profile name is required',
        help: [`Individual or company Instagram profile`],
      },
    },
    {
      id: 'switchSocialMediaFeatureRequired',
      index: 'switchSocialMediaFeatureRequired',
      label: intl.formatMessage({ id: 'switchSocialMediaFeatureRequired' }),
      elementType: 'dropDown',
      value: '',
      placeHolder: 'Select',
      className: 'col-md-4 col-sm-6',
      list: [
        { label: 'Yes', value: '1' },
        { label: 'No', value: '0' },
      ],
      options: {
        required: true,
        validation: /([^\s])/,
        errorMsg: 'This field is required',
        help: [
          `You can show or hide social media icon links to users from the global menu`,
          `This feature can be enabled or disabled basesd on your selection`,
        ],
      },
    },
  ];
  const userContext = useContext(UserContext);
  const [appData, setMaster] = useContext(AppContext);
  const [formStructure, setFormStructure] = useState(masterConfig);
  const [loader, setLoader] = useState(true);

  const getBackendAjax = (Table, TableRows) => {
    const formdata = new FormData();
    formdata.append('TableRows', TableRows);
    formdata.append('Table', Table);
    return apiInstance.post('getBackend', formdata);
  };

  useEffect(() => {
    setLoader(true);
    const TableRows = formStructure.map(form => form.index);
    getBackendAjax('config', TableRows)
      .then(r => {
        const responseObject = r.data.response[0];
        const responseArray = Object.keys(responseObject);
        let backupStructure = [...formStructure];
        backupStructure = backupStructure.map(backup => {
          if (responseArray.includes(backup.index)) {
            backup.value = encryptKeys.includes(backup.index)
              ? CryptoJS.AES.decrypt(
                responseObject[backup.index],
                appData[encryptSaltKey]
              ).toString(CryptoJS.enc.Utf8)
              : responseObject[backup.index];
          }
          return backup;
        });
        setFormStructure(backupStructure);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [JSON.stringify(appData)]);

  const onMassagePayload = (index, value) => {
    let backupStructure = [...formStructure];
    backupStructure = backupStructure.map(backup => {
      if (backup.id === index) {
        backup.value = value;
      }
      return backup;
    });
    setFormStructure(backupStructure);
  };

  const onReactiveFormSubmit = () => {
    setLoader(true);
    const salt = [...formStructure].filter(f => f.id === encryptSaltKey)[0]
      .value;
    let payload = [...formStructure].map(f => ({
      [f.id]: encryptKeys.includes(f.id)
        ? CryptoJS.AES.encrypt(f.value, salt).toString()
        : f.value,
    }));
    payload = Object.assign({}, ...payload);
    const newPayload = {
      Table: 'config',
      updateData: [payload],
    };
    const formdata = new FormData();
    formdata.append('postData', JSON.stringify(newPayload));

    apiInstance
      .post('/postBackend', formdata)
      .then(res => {
        if (res.data.response) {
          let backupStructure = [...formStructure];
          const bPayLoad = Object.keys(payload);
          backupStructure = backupStructure.map(backup => {
            if (bPayLoad.includes(backup.index)) {
              backup.value = payload[backup.index];
            }
            return backup;
          });
          setFormStructure(backupStructure);
          userContext.renderToast({
            message: intl.formatMessage({ id: 'transactionSavedSuccessfully' }),
          });
          let massageStructure = backupStructure.map(b => [b.id, b.value]);
          massageStructure = Object.fromEntries(massageStructure);
          setMaster(massageStructure);
        }
      })
      .catch(e =>
        userContext.renderToast({
          type: 'error',
          icon: 'fa fa-times-circle',
          message: intl.formatMessage({ id: 'unableToReachServer' }),
        })
      )
      .finally(() => setLoader(false));
  };

  return (
    <div className="">
      {loader ? (
        <div className="text-center mt-100">
          <Loader
            type={helpers.loadRandomSpinnerIcon()}
            color={document.documentElement.style.getPropertyValue(
              '--app-theme-bg-color'
            )}
            height={100}
            width={100}
          />
        </div>
      ) : (
        <div className="">
          {
            <Wizard
              key={1}
              data={formStructure}
              menu={wizardData}
              onMassagePayload={onMassagePayload}
              onReactiveFormSubmit={onReactiveFormSubmit}
            />
          }
        </div>
      )}
    </div>
  );
}
export default Config;
