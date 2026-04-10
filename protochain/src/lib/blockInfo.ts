import Transaction from "./transaction";

/**
 * Blockchain interface
 * index: the position of the block in the chain
 * previousHash: the hash of the previous block
 * difficult: the current mining difficulty
 * masxDifficult: the maximum allowed difficulty
 * feePerTx: the transaction fee per operation
 * data: the information or transactions stored in the block
 */
export default interface BlockInfo {
    index: number;
    previousHash: string;
    difficulty: number;
    maxDifficulty: number;
    feePerTx: number;
    transactions: Transaction[];
}