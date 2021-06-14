import { ethers } from 'hardhat'
import { expect } from 'chai';

import { createFixtureLoader, provider } from "../helpers/provider";
import { BN, BNe18, ERC20Helper, FeeAmount } from '../helpers/constants';
import { createTimeMachine } from '../helpers/time';
import { UniswapFixtureType, UniswapFixture, mintPosition } from "../helpers/fixtures";
import { AccountFixture } from "../helpers/accounts";
import { Ad3StakeManager, TestIncentiveId } from "../../typechain";


//describe('unittest/Deposit', () => {
    //const accounts = new AccountFixture(provider.getWallets(), provider);
    //const lpUser0 = accounts.lpUser0();
    //const amountDesired = BNe18(10);
    //const totalReward = BNe18(1000000);
    //const erc20Helper = new ERC20Helper();
    //const timeMachine = createTimeMachine(provider);

    //let context: UniswapFixtureType;
    //let tokenId: string;

    //const SAFE_TRANSFER_FROM_SIGNATURE = 'safeTransferFrom(address,address,uint256,bytes)';
    //const INCENTIVE_KEY_ABI = 'tuple(address rewardToken, address pool, uint256 startTime, uint256 endTime)';

    //beforeEach('create fixture loader', async () => {
        //let loadFixture = createFixtureLoader(provider.getWallets(), provider);
        //context = await loadFixture(UniswapFixture);
        //await erc20Helper.ensureBalanceAndApproval(
            //lpUser0,
            //[context.token0, context.token1],
            //amountDesired,
            //context.nft.address
        //);
        //const tickSpacing = getTickSpacing(FeeAmount.MEDIUM);
        //tokenId = await mintPosition(context.nft.connect(lpUser0), {
            //token0: context.token0.address,
            //token1: context.token1.address,
            //fee: FeeAmount.MEDIUM,
            //tickLower: getMinTick(tickSpacing),
            //tickUpper: getMaxTick(tickSpacing),
            //recipient: lpUser0.address,
            //amount0Desired: amountDesired,
            //amount1Desired: amountDesired,
            //amount0Min: 0,
            //amount1Min: 0,
            //deadline: (await blockTimestamp()) + 1000
        //})
    //});
//});
