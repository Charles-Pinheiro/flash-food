import { NextFunction, Request } from 'express';
import AppError from '../errors/appError';
import { StoreRepository } from '../repositories/Store/StoresRepository';

export default async function storeOwner(request: Request, next: NextFunction): Promise<void> {
    const userId = request.user.id;

    const { store_id } = request.params;

    const storeRepository = new StoreRepository();

    const store = await storeRepository.findOne({ store_id });

    if (!store) {
        throw new AppError('Store not found!', 404);
    }

    if (store.userId !== userId) {
        throw new AppError('Not authorized', 401);
    }

    next();
}